"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ft_division = void 0;
function ft_division(str, nb) {
    var sz = str.length;
    if (sz == 0 || nb == 0) {
        return (0);
    }
    return (sz / nb);
}
exports.ft_division = ft_division;
