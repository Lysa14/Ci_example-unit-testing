export function get_new_date(d: Date, after: boolean): Date {
    const month: number = d.getMonth() + 1;

    if (after) {
        return new Date(month.toString() + '-01-' + d.getFullYear().toString());
    }
    const newMonth: number = month < 12 ? month + 1 : 1;
    const year: number = newMonth == 1 ? d.getFullYear() + 1 : d.getFullYear();
    return new Date(newMonth.toString() + '-01-' + year.toString());
}

export function calc_number_days(date_1: Date, date_2: Date): number {
    const resultTimestamp: number = date_1.getTime() - date_2.getTime();
    return Math.round(resultTimestamp / (1000 * 60 * 60 * 24));
}

export function calc_date_start(date_start_str: string) {
    const date_start: Date = new Date(date_start_str);

    if (date_start.getTime()) {
        const first_day_month: Date = get_new_date(date_start, true);
        const result: number = calc_number_days(date_start, first_day_month);
        if (result < 0) {
            return ({status: "error", message: "The date start is greater than the date end"});
        } else {
            return ({result: result});
        }
    } else {
        return ({status: "error", message: "Date format is not respected: mm-dd-yyyy"});
    }
}

export function calc_date_end(date_end_str: string) {
    const date_end: Date = new Date(date_end_str);

    if (date_end.getTime()) {
        const first_day_month: Date = get_new_date(date_end, false);
        const result: number = calc_number_days(first_day_month, date_end) - 1;
        if (result < 0) {
            return ({status: "error", message: "The date start is greater than the date end"});
        } else {
            return ({result: result});
        }
    } else {
        return ({status: "error", message: "Date format is not respected: mm-dd-yyyy"});
    }
}