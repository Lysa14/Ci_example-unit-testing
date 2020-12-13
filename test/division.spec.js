"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var division_1 = require("../src/function/division");
require("mocha");
var assert = require("assert");
describe('Test division function', function () {
    it('Test simple', function () {
        assert.strictEqual(division_1.ft_division('coucou', 3), 2);
    });
    it('Test empty str', function () {
        assert.strictEqual(division_1.ft_division('', 3), 0);
    });
    it('Test zero nbr', function () {
        assert.strictEqual(division_1.ft_division('coucou', 0), 0);
    });
    it('Test float result', function () {
        assert.strictEqual(division_1.ft_division('Test float result', 3), 5.666666666666667);
    });
    it('Test negative number', function () {
        assert.strictEqual(division_1.ft_division('coucou', -3), -2);
    });
});
