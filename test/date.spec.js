"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_1 = require("../src/function/date");
require("mocha");
var assert = require("assert");
var first_date = new Date("2020-11-11");
var second_date = new Date("2010-05-18");
describe('Test get_new_date function', function () {
    it('Test simple before', function () {
        var result = date_1.get_new_date(first_date, true);
        assert.strictEqual(result.getFullYear(), 2020);
        assert.strictEqual(result.getMonth(), 10);
        assert.strictEqual(result.getDate(), 1);
    });
    it('Test simple last', function () {
        var result = date_1.get_new_date(first_date, false);
        assert.strictEqual(result.getFullYear(), 2020);
        assert.strictEqual(result.getMonth(), 11);
        assert.strictEqual(result.getDate(), 1);
    });
    it('Test other date before', function () {
        var result = date_1.get_new_date(second_date, true);
        assert.strictEqual(result.getFullYear(), 2010);
        assert.strictEqual(result.getMonth(), 4);
        assert.strictEqual(result.getDate(), 1);
    });
    it('Test other date last', function () {
        var result = date_1.get_new_date(second_date, false);
        assert.strictEqual(result.getFullYear(), 2010);
        assert.strictEqual(result.getMonth(), 5);
        assert.strictEqual(result.getDate(), 1);
    });
});
describe('Test calc_number_days function', function () {
    it('Test simple before', function () {
        var result = date_1.calc_number_days(first_date, new Date('2020-11-01'));
        assert.strictEqual(result, 10);
    });
    it('Test simple last', function () {
        assert.strictEqual(date_1.calc_number_days(new Date("2020-12-01"), first_date), 20);
    });
});
