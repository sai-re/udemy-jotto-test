import { storeFactory } from '../../test/util';
import { guessWord } from '../redux/actions/index';

describe('guessWord action dispatcher', () => {
    const secretWord = "party";
    const unsuccessfulGuess = "train";

    describe("no guessed words", () => {
        let store;
        const initialState = { secretWord };

        beforeEach(() => {
            store = storeFactory(initialState);
        });

        it("updates state correctly for unsuccessful guess", () => {
            //dispatch with incorrect word
            store.dispatch(guessWord(unsuccessfulGuess));
            //get new state from store
            const newState = store.getState();

            //expected state after dispatching incorrect guess
            const expectedState = {
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3
                }],
                ...initialState
            };

            console.log("new", newState);
            console.log("expected", expectedState);

            expect(newState).toEqual(expectedState);
        });

        it("updates state correctly for successful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();

            const expectedState = {
                success: true,
                guessedWord: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5
                }],
                ...initialState
            };

            console.log("new", newState);
            console.log("expected", expectedState);

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
        const initialState = { secretWord, guessedWords }

        beforeEach(() => {
            store = storeFactory(initialState);
        });
        
        it("updates state correctly for unsuccessful guess", () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();

            //create expected state with unsuccessful guess added to dummy guess
            const expectedState = {
                secretWord,
                success: false,
                guessedWord: [
                    ...guessedWords, 
                    { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
                ]
            };

            console.log("new", newState);
            console.log("expected", expectedState);

            expect(newState).toEqual(expectedState);
        });

        it("updates state correctly for successful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();

            //create expected state with unsuccessful guess added to dummy guess
            const expectedState = {
                secretWord,
                success: true,
                guessedWord: [
                    ...guessedWords, 
                    { guessedWord: secretWord, letterMatchCount: 5 }
                ]
            };

            console.log("new", newState);
            console.log("expected", expectedState);

            expect(newState).toEqual(expectedState);
        });
    });
});