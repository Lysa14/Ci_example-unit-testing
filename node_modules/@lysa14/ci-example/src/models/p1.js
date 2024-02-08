"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_division = void 0;
var division_1 = require("../function/division");
function get_division(res, str, nbr_str) {
    var nbr = parseInt(nbr_str, 10);
    if (nbr >= 0 && nbr <= 20) {
        var result = division_1.ft_division(str, nbr);
        res.json({ statusCode: 200, result: result.toString() });
    }
    else {
        res.json({ status: "error", statusCode: 501, message: "nbr must be between 0 and 20" });
    }
}
exports.get_division = get_division;
