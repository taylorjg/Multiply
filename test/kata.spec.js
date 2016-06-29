import add from './kata';

describe('kata unit tests', () => {
    it('add', () => {
        expect(add(1, 2)).toBe(3);
    });
});
