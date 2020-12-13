"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_date_start_end = exports.get_date_start = void 0;
var date_1 = require("../function/date");
function get_date_start(res, date_start) {
    var result = date_1.calc_date_start(date_start);
    res.json({ statusCode: 200, date_start: result });
}
exports.get_date_start = get_date_start;
function get_date_start_end(res, date_start, date_end) {
    var number_days_start = date_1.calc_date_start(date_start);
    var number_days_end = date_1.calc_date_end(date_end);
    res.json({ statusCode: 200, date_start: number_days_start, date_end: number_days_end });
}
exports.get_date_start_end = get_date_start_end;
