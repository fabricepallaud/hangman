import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import wordApiKey from '@/wordApi.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wordApiBaseUrl: 'https://www.dictionaryapi.com/api/v1/references/sd4/xml',
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
    lettersFound: [],
    nbOfLettersToGuess: null,
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
      state.lettersFound.splice(0)
    },
    INITIALIZE_WORD (state, value) {
      const wordsAvailable = state.wordsAvailable
      state.wordToGuess = wordsAvailable[wordsAvailable.length * Math.random() | 0]
      for (var i = 0; i < state.wordToGuess.length; i++) {
        state.wordToGuessAsArray.push('')
      }
    },
    COMPUTER_PICKS_LETTER (state) {
      // few letters left: computer picks a letter based on suggestions
      var randomLetter
      if (state.nbOfLettersToGuess < 3) {

      } else {
        // computer picks a letter randomly
        do {
          randomLetter = String.fromCharCode(97 + 26 * Math.random() | 0)
        } while (state.lettersFound.includes(randomLetter))
      }
      // checking if letter belongs to word
      let letterWasFound = false
      for (var i = 0; i < state.wordToGuess.length; i++) {
        if (randomLetter === state.wordToGuess[i]) {
          Vue.set(state.wordToGuessAsArray, i, randomLetter)
          letterWasFound = true
          state.nbOfLettersToGuess--
          if (!state.lettersFound.includes(randomLetter)) {
            state.lettersFound.push(randomLetter)
          }
        }
      }
      // if all letters were found
      if (state.wordToGuessAsArray.every(x => x !== '')) {
        state.gameIsOver = true
        state.guesserWon = true
      } else if (!letterWasFound) {
        // otherwise make a stroke
        state.nbOfStrokes++
        // if hangman complete game is over
        if (state.nbOfStrokes === 10) {
          state.gameIsOver = true
        }
      }
    },
    SET_NB_OF_LETTER_TO_GUESS (state, value) {
      state.nbOfLettersToGuess = value
    },
    SET_KEYBOARD_VISIBILITY (state, value) {
      state.showKeyboard = value
    },
    resolveAfter2Seconds () {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved')
        }, 300)
      })
    }
  },
  actions: {
    async computerPicksLetter ({ commit, state }) {
      // few letters left: computer picks a letter based on suggestions
      var randomLetter
      if (state.nbOfLettersToGuess <= 4) {
        await new Promise(resolve => {
          axios.get(`${state.wordApiBaseUrl}/${state.wordToGuess}?key=${wordApiKey}`)
            .then((res) => {
              // console.log(res.data)
              console.log(state.lettersFound)
              resolve(res)
            })
          // return res.data.includes('def')
        })
      } else {
        // computer picks a letter randomly
        do {
          randomLetter = String.fromCharCode(97 + 26 * Math.random() | 0)
        } while (state.lettersFound.includes(randomLetter))
      }
      // checking if letter belongs to word
      let letterWasFound = false
      for (var i = 0; i < state.wordToGuess.length; i++) {
        if (randomLetter === state.wordToGuess[i]) {
          Vue.set(state.wordToGuessAsArray, i, randomLetter)
          letterWasFound = true
          state.nbOfLettersToGuess--
          if (!state.lettersFound.includes(randomLetter)) {
            state.lettersFound.push(randomLetter)
          }
        }
      }
      // if all letters were found
      if (state.wordToGuessAsArray.every(x => x !== '')) {
        state.gameIsOver = true
        state.guesserWon = true
      } else if (!letterWasFound) {
        // otherwise make a stroke
        state.nbOfStrokes++
        // if hangman complete game is over
        if (state.nbOfStrokes === 10) {
          state.gameIsOver = true
        }
      }
    }
  }
})
