"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calc_date_end = exports.calc_date_start = exports.calc_number_days = exports.get_new_date = void 0;
function get_new_date(d, after) {
    var month = d.getMonth() + 1;
    if (after) {
        return new Date(month.toString() + '-01-' + d.getFullYear().toString());
    }
    var newMonth = month < 12 ? month + 1 : 1;
    var year = newMonth == 1 ? d.getFullYear() + 1 : d.getFullYear();
    return new Date(newMonth.toString() + '-01-' + year.toString());
}
exports.get_new_date = get_new_date;
function calc_number_days(date_1, date_2) {
    var resultTimestamp = date_1.getTime() - date_2.getTime();
    return Math.round(resultTimestamp / (1000 * 60 * 60 * 24));
}
exports.calc_number_days = calc_number_days;
function calc_date_start(date_start_str) {
    var date_start = new Date(date_start_str);
    if (date_start.getTime()) {
        var first_day_month = get_new_date(date_start, true);
        var result = calc_number_days(date_start, first_day_month);
        if (result < 0) {
            return ({ status: "error", message: "The date start is greater than the date end" });
        }
        else {
            return ({ result: result });
        }
    }
    else {
        return ({ status: "error", message: "Date format is not respected: mm-dd-yyyy" });
    }
}
exports.calc_date_start = calc_date_start;
function calc_date_end(date_end_str) {
    var date_end = new Date(date_end_str);
    if (date_end.getTime()) {
        var first_day_month = get_new_date(date_end, false);
        var result = calc_number_days(first_day_month, date_end) - 1;
        if (result < 0) {
            return ({ status: "error", message: "The date start is greater than the date end" });
        }
        else {
            return ({ result: result });
        }
    }
    else {
        return ({ status: "error", message: "Date format is not respected: mm-dd-yyyy" });
    }
}
exports.calc_date_end = calc_date_end;
