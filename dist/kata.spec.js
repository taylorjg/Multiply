'use strict';

var _kata = require('./kata');

var _it_multiple = require('./it_multiple');

var _it_multiple2 = _interopRequireDefault(_it_multiple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('kata unit tests', function () {

    var testCases = [[2, 4, 8], [3, 6, 18], [1, 20000, 20000]];

    (0, _it_multiple2.default)('multiply1', function (a, b, expected) {
        expect((0, _kata.multiply1)(a, b)).toBe(expected);
    }, testCases);

    (0, _it_multiple2.default)('multiply2', function (a, b, expected) {
        expect((0, _kata.multiply2)(a, b)).toBe(expected);
    }, testCases);

    (0, _it_multiple2.default)('multiply3', function (a, b, expected) {
        expect((0, _kata.multiply3)(a, b)).toBe(expected);
    }, testCases);
});