# hangman

Hangman game built with Vue.js. Two game modes are available: (1) the human player is the guesser, and (2) the computer is the guesser (in which case human player provides the word for the computer to guess).

## Notes

- User-supplied word is validated by third-party word API (dictionaryapi.com)
- The state of the game is mostly managed by Vuex
- ES6 async/await functions are used several times in the project (support is now wide but perhaps not universal yet)