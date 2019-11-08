# hangman

Hangman game built with Vue.

Two game modes are available:
- Human player is the guesser
- Computer is the guesser (human player provides the word)

## Rules of the game

Hangman is a guessing game. One player thinks of a word and the other tries to guess it by suggesting letters within a certain number of guesses. If the suggested letter does not occur in the word, the other player draws one element of a hanged man stick figure as a tally mark.

## Notes

- User-supplied word is validated by third-party word API (dictionaryapi.com)
- The state of the game is mostly managed by Vuex
- ES6 async/await functions are used several times in the project (support is wide today but perhaps not universal yet)