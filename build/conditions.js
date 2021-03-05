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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZGl0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmRpdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrQkFBZTtJQUNYLEtBQUssRUFBRSxVQUFDLElBQVk7UUFDaEIsT0FBTyxVQUFDLENBQVMsSUFBSyxPQUFBLElBQUksS0FBSyxDQUFDLEVBQVYsQ0FBVSxDQUFDO0lBQ3JDLENBQUM7SUFDRCxhQUFhLEVBQUUsVUFBQyxJQUFZO1FBQ3hCLE9BQU8sVUFBQyxDQUFTLElBQUssT0FBQSxJQUFJLEtBQUssQ0FBQyxFQUFWLENBQVUsQ0FBQztJQUNyQyxDQUFDO0lBQ0Q7O09BRUc7SUFDSCxRQUFRLEVBQUUsVUFBQyxJQUFZO1FBQ25CLE9BQU8sVUFBQyxDQUFTLElBQUssT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQW5ELENBQW1ELENBQUM7SUFDOUUsQ0FBQztJQUNEOztPQUVHO0lBQ0gsRUFBRSxFQUFFO1FBQUMsaUJBQXNDO2FBQXRDLFVBQXNDLEVBQXRDLHFCQUFzQyxFQUF0QyxJQUFzQztZQUF0Qyw0QkFBc0M7O1FBRXZDLE9BQU8sVUFBQyxDQUFTLElBQUssT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFKLENBQUksQ0FBQyxFQUF2QixDQUF1QixDQUFDO0lBQ2xELENBQUM7SUFDRDs7T0FFRztJQUNILEdBQUcsRUFBRTtRQUFDLGlCQUFzQzthQUF0QyxVQUFzQyxFQUF0QyxxQkFBc0MsRUFBdEMsSUFBc0M7WUFBdEMsNEJBQXNDOztRQUV4QyxPQUFPLFVBQUMsQ0FBUyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBSixDQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztJQUNuRCxDQUFDO0NBQ0osQ0FBQSJ9