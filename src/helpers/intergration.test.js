import { storeFactory } from '../../test/util';
import { guessWord } from '../redux/actions/index';

describe('guessWord action dispatcher', () => {
    const unsuccessfulGuess = "train";
    // const secretWord = ["party"];
    const secretWord = "party";

    describe("no guessed words", () => {
        let store;
        const initialState = { secretWord };

        beforeEach(() => store = storeFactory(initialState));

        it("updates state correctly for unsuccessful guess", () => {
            //dispatch with incorrect word
            store.dispatch(guessWord(unsuccessfulGuess));
            //get new state from store
            const newState = store.getState();
            
            //expected state after dispatching incorrect guess
            const expectedState = {
                giveUp: false,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }],
                ...initialState
            };

            expect(newState).toEqual(expectedState);
        });

        it("updates state correctly for successful guess", () => {
            store.dispatch(guessWord("party"));
            const newState = store.getState();

            const expectedState = {
                giveUp: false,
                success: true,
                guessedWords: [{
                    guessedWord: "party",
                    letterMatchCount: 5
                }],
                ...initialState
            };

            expect(newState).toEqual(expectedState);
        });
    });

    describe("some guessed words", () => {
        let store;

        //create object with dummy guess
        const guessedWords = [{
            guessedWord: "agile",
            letterMatchCount: 1
        }];

        //create intial state with dummy guess
        const initialState = { secretWord, guessedWords };

        beforeEach(() => store = storeFactory(initialState));
        
        it("updates state correctly for unsuccessful guess", () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();

            //create expected state with unsuccessful guess added to dummy guess
            const expectedState = {
                giveUp: false,
                secretWord,
                success: false,
                guessedWords: [
                    ...guessedWords, 
                    { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
                ]
            };

            expect(newState).toEqual(expectedState);
        });

        it("updates state correctly for successful guess", () => {
            store.dispatch(guessWord("party"));
            const newState = store.getState();

            //create expected state with unsuccessful guess added to dummy guess
            const expectedState = {
                giveUp: false,
                secretWord,
                success: true,
                guessedWords: [
                    ...guessedWords, 
                    { guessedWord: "party", letterMatchCount: 5 }
                ]
            };

            expect(newState).toEqual(expectedState);
        });
    });
});