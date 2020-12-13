import { ft_division } from '../src/function/division';

import 'mocha';
import assert = require('assert');

describe('Test division function', () => {
    it('Test simple', () => {
        assert.strictEqual(ft_division('coucou', 3), 2);
    });
    it('Test empty str', () => {
        assert.strictEqual(ft_division('', 3), 0);
    });
    it('Test zero nbr', () => {
        assert.strictEqual(ft_division('coucou', 0), 0);
    });
    it('Test float result', () => {
        assert.strictEqual(ft_division('Test float result', 3), 5.666666666666667);
    });
    it('Test negative number', () => {
        assert.strictEqual(ft_division('coucou', -3), -2);
    });
});