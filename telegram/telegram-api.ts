import { MTProto } from '@mtproto/core';
//@ts-ignore
import { sleep } from '@mtproto/core/src/utils/common';
import telegramStore from './telegram-store';

const mtproto = new MTProto({
    api_id: parseInt(process.env.TELEGRAM_API_ID!),
    api_hash: process.env.TELEGRAM_API_HASH!,
    customLocalStorage: telegramStore
});

const api = {
    call(method: any, params: any, options = {}): any
    {
        return mtproto.call(method, params, options).catch(async error =>
        {
            console.log(`${method} error:`, error);

            const { error_code, error_message } = error;

            if (error_code === 420)
            {
                const seconds = +error_message.split('FLOOD_WAIT_')[1];
                const ms = seconds * 1000;

                await sleep(ms);

                return this.call(method, params, options);
            }

            if (error_code === 303)
            {
                const [type, dcId] = error_message.split('_MIGRATE_');

                // If auth.sendCode call on incorrect DC need change default DC, because call auth.signIn on incorrect DC return PHONE_CODE_EXPIRED error
                if (type === 'PHONE')
                {
                    await mtproto.setDefaultDc(+dcId);
                } else
                {
                    options = {
                        ...options,
                        dcId: +dcId,
                    };
                }

                return this.call(method, params, options);
            }

            return Promise.reject(error);
        });
    },
    on(updateName:string, listener: Function)
    {
        mtproto.updates.on(updateName, listener)
    },
    async getUser()
    {
        try
        {
            const user = await api.call('users.getFullUser', {
                id: {
                    _: 'inputUserSelf',
                },
            });

            return user;
        } catch (error)
        {
            return null;
        }
    },
    sendCode(phone: string)
    {
        return api.call('auth.sendCode', {
            phone_number: phone,
            settings: {
                _: 'codeSettings',
            },
        });
    },
    signIn(code: string, phone: string, phone_code_hash: string)
    {
        return api.call('auth.signIn', {
            phone_code: code,
            phone_number: phone,
            phone_code_hash: phone_code_hash,
        });
    }
};

export default api;