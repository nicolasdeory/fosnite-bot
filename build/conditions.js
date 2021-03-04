"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    exact: function (text) {
        return function (m) { return text === m; };
    },
    containsExact: function (text) {
        return function (m) { return text === m; };
    },
    /**
     * Also matches lowercase and accented
     */
    contains: function (text) {
        return function (m) { return m.toLowerCase().normalize("NFD").indexOf(text) >= 0; };
    },
    /**
     * At least one condition met
     */
    or: function () {
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        return function (m) { return actions.some(function (x) { return x(m); }); };
    },
    /**
     * All conditions met
     */
    and: function () {
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        return function (m) { return actions.every(function (x) { return x(m); }); };
    }
};
//# sourceMappingURL=conditions.js.map