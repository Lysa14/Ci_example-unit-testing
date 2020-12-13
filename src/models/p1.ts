import { Response } from 'express';
import { ft_division } from '../function/division';

export function get_division(res: Response, str: string, nbr_str: string) {
    const nbr: number = parseInt(nbr_str, 10);

    if (nbr >= 0 && nbr <= 20) {
        const result: number = ft_division(str, nbr);
        res.json({statusCode: 200, result: result.toString()});
    } else {
        res.json({status: "error", statusCode: 501, message: "nbr must be between 0 and 20"});
    }
}