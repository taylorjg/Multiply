import {multiply1, multiply2, multiply3} from './kata';
import it_multiple from './it_multiple';

describe('kata unit tests', () => {

    const testCases = [
        [2, 4, 8],
        [3, 6, 18],
        [1, 20000, 20000]
    ];

    it_multiple(
        'multiply1',
        (a, b, expected) => {
            expect(multiply1(a, b)).toBe(expected);
        },
        testCases);

    it_multiple(
        'multiply2',
        (a, b, expected) => {
            expect(multiply2(a, b)).toBe(expected);
        },
        testCases);

    it_multiple(
        'multiply3',
        (a, b, expected) => {
            expect(multiply3(a, b)).toBe(expected);
        },
        testCases);
});
