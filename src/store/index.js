import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wordToGuess: null,
    wordToGuessAsArray: [],
    computerIsGuesser: false,
    wordsAvailable: [
      'screwdriver',
      'football',
      'movie',
      'keyboard',
      'strawberry',
      'school',
      'marriage',
      'jacket',
      'electricity',
      'argument',
      'vacation',
      'christmas',
      'teleporter',
      'history',
      'purple',
      'mattress'
    ],
    showKeyboard: true,
    nbOfStrokes: 0,
    gameIsOver: false,
    wordWasFound: false,
    guesserIsHuman: true,
    guesserWon: false
  },
  mutations: {
    SET_WORD_TO_GUESS (state, value) {
      state.wordToGuess = value
    },
    SET_LETTER_IN_WORD_AS_ARRAY (state, value) {
      // same word to guess as above here defined as an array for easier access to its individual letters
      Vue.set(state.wordToGuessAsArray, value.i, value.letter)
    },
    EMPTY_WORD_AS_ARRAY (state) {
      state.wordToGuessAsArray.splice(0)
    },
    SET_WORD_AS_ARRAY_PUSH (state) {
      // this is used at the outset of each game to create the "wordToGuessAsArray" array with
      // the right number of (initially empty) items
      state.wordToGuessAsArray.push('')
    },
    INCREMENT_STROKE_COUNTER (state) {
      // increments stroke counter (which counts misguesses & strokes)
      state.nbOfStrokes++
    },
    SET_GAME_OVER (state, value) {
      state.gameIsOver = true
    },
    SET_GUESSER_AS_HUMAN (state, value) {
      state.guesserIsHuman = value
    },
    SET_GUESSER_WON (state, value) {
      state.guesserWon = value
    },
    RESTART_GAME (state, value) {
      state.wordToGuessAsArray.splice(0)
      state.nbOfStrokes = 0
      state.gameIsOver = false
      state.wordWasFound = false
      state.guesserWon = false
    },
    INITIALIZE_WORD (state, value) {
      const wordsAvailable = state.wordsAvailable
      state.wordToGuess = wordsAvailable[wordsAvailable.length * Math.random() | 0]
      for (var i = 0; i < state.wordToGuess.length; i++) {
        state.wordToGuessAsArray.push('')
      }
    },
    COMPUTER_PICKS_LETTER (state) {
      const randomLetter = String.fromCharCode(97 + 26 * Math.random() | 0)
      let letterFound = false
      for (var i = 0; i < state.wordToGuess.length; i++) {
        if (randomLetter === state.wordToGuess[i]) {
          Vue.set(state.wordToGuessAsArray, i, randomLetter)
          letterFound = true
        }
      }
      if (state.wordToGuessAsArray.every(x => x !== '')) {
        state.gameIsOver = true
        state.guesserWon = true
      } else if (!letterFound) {
        state.nbOfStrokes++
        if (state.nbOfStrokes === 10) {
          state.gameIsOver = true
        }
      }
    },
    SET_KEYBOARD_VISIBILITY (state, value) {
      state.showKeyboard = value
    }
  }
})
