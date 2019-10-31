import { getLetterMatchCount } from './index';

describe('get matching letter count', () => {
    let secretWord = 'party';
    test('show correct count when no matching letter', () => {
        const letterMatchCount = getLetterMatchCount(secretWord, 'flone');
        expect(letterMatchCount).toBe(0);
    });
    test('show correct count when 3 matching letter', () => {
        const letterMatchCount = getLetterMatchCount(secretWord, 'pry');
        expect(letterMatchCount).toBe(3);
    });
    test('show correct count when duplicate matching letter', () => {
        const letterMatchCount = getLetterMatchCount(secretWord, 'parap');
        expect(letterMatchCount).toBe(3);
    });
})