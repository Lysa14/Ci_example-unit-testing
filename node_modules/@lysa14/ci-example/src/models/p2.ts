import { Response } from 'express';
import {calc_date_start, calc_date_end} from '../function/date';

export function get_date_start(res: Response, date_start: string) {
    const result = calc_date_start(date_start);

    res.json({statusCode: 200, date_start: result});
}

export function get_date_start_end(res: Response, date_start: string, date_end: string) {
    const number_days_start = calc_date_start(date_start);
    const number_days_end = calc_date_end(date_end);

    res.json({statusCode: 200, date_start: number_days_start, date_end: number_days_end});
}