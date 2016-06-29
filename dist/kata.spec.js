'use strict';

var _kata = require('./kata');

var _kata2 = _interopRequireDefault(_kata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('kata unit tests', function () {
    it('add', function () {
        expect((0, _kata2.default)(1, 2)).toBe(3);
    });
});