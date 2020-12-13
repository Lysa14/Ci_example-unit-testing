"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config({
    path: '.env'
});
// express setup
var express_1 = __importDefault(require("express"));
var port = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : '4242', 10);
var app = express_1.default();
// import get function
var p1_1 = require("./models/p1");
var p2_1 = require("./models/p2");
app
    .get('/hello', function (req, res) {
    res.send("how's it going?");
})
    // p1
    .get('/api/p1/:str/:nbr', function (req, res) {
    p1_1.get_division(res, req.params.str, req.params.nbr);
})
    // p2
    .get('/api/p2/:date_start', function (req, res) {
    p2_1.get_date_start(res, req.params.date_start);
})
    .get('/api/p2/:date_start/:date_end', function (req, res) {
    p2_1.get_date_start_end(res, req.params.date_start, req.params.date_end);
});
app.listen(port, function () { return console.log("Listening on port " + port); });
module.exports = app;
