require('dotenv').config({
    path: '.env'
});

// express setup
import express from "express";
const port: number = parseInt(process.env.PORT ?? '4242', 10);
const app = express();

// import get function
import { get_division } from './models/p1';
import { get_date_start, get_date_start_end } from './models/p2';

app
.get('/hello', (req, res) => {
    res.send("how's it going?");
})
// p1
.get('/api/p1/:str/:nbr', (req, res) => {
    get_division(res, req.params.str, req.params.nbr);
})
// p2
.get('/api/p2/:date_start', (req, res) => {
    get_date_start(res, req.params.date_start);
})
.get('/api/p2/:date_start/:date_end', (req, res) => {
    get_date_start_end(res, req.params.date_start, req.params.date_end);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;