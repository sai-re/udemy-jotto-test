import moxios from 'moxios';
import { storeFactory } from '../../../test/util';
import { getSecretWord } from './index';

// describe("for getSecretWord action creator", () => {
//     beforeEach(() => moxios.install());
//     afterEach(() => moxios.uninstall());

//     it("add random word from response to state", () => {
//         const secretWord = "party";
//         const store = storeFactory();

//         //response for when axios sends a request
//         moxios.wait(() => {
//             //grabs most recent request sent to moxios
//             const request = moxios.requests.mostRecent()
//             //expected return from server
//             request.respondWith({
//                 status: 200,
//                 response: secretWord
//             });
//         });

//         //action creator as arg returns promise, code will wait to resolve before completing test
//         return store.dispatch(getSecretWord())
//         .then(() => {
//             const newState = store.getState();
//             //check if state has secret word
//             expect(newState.secretWord).toBe(secretWord);
//         });
//     });
// });