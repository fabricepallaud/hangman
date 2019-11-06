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
    nbOfStrokes: 0,
    gameIsOver: false,
    wordWasFound: false,
    guesserWon: false
  },
  mutations: {
    SET_WORD_TO_GUESS (state, value) {
      state.wordToGuess = value
    },
    SET_WORD_AS_ARRAY (state, value) {
      // Same word to guess as above here defined as an array for easier access to its individual letters
      Vue.set(state.wordToGuessAsArray, value.i, value.letter)
    },
    SET_WORD_AS_ARRAY_PUSH (state) {
      // This is used at the outset of each game to create the "wordToGuessAsArray" array with
      // the right number of (initially empty) items
      state.wordToGuessAsArray.push('')
    },
    INCREMENT_STROKE_COUNTER (state) {
      state.nbOfStrokes++
    },
    SET_GAME_OVER (state, value) {
      state.gameIsOver = value
    },
    SET_GUESSER_WON (state, value) {
      state.guesserWon = value
    }
  }
})
