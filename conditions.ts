export default {
    any: () => (m: string) => true,
    exact: (text: string) => {
        return (m: string) => text === m;
    },
    containsExact: (text: string) => {
        return (m: string) => text === m;
    },
    /**
     * Also matches lowercase and accented
     */
    contains: (text: string) => {
        return (m: string) => m.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").indexOf(text) >= 0;
    },
    /**
     * At least one condition met
     */
    or: (...actions: ((m: string) => boolean)[]) =>
    {
        return (m: string) => actions.some(x => x(m));
    },
    /**
     * All conditions met
     */
    and: (...actions: ((m: string) => boolean)[]) =>
    {
        return (m: string) => actions.every(x => x(m));
    }
}