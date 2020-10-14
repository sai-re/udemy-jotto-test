import { getLetterMatchCount } from "./index";

describe('tests for getLetterMatchCount', () => {
    // const secretWord = ["party"];
    const secretWord = "party";

    it('returns correct count when there are matching letters', () => {
        const letterMatchCount = getLetterMatchCount("bones", secretWord);
        expect(letterMatchCount).toBe(0);
    });

    it('returns correct count when there are 3 matching letters', () => {
        const letterMatchCount = getLetterMatchCount("train", secretWord);
        expect(letterMatchCount).toBe(3);
    });

    it('returns correct count when there are duplicate letters in word', () => {
        const letterMatchCount = getLetterMatchCount("parka", secretWord);
        expect(letterMatchCount).toBe(3);
    });
});