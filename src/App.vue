<template>
  <div class="app">
    <h1 class="app-title">
      Hangman
    </h1>
    <gallows />
    <word />
    <keyboard v-if="!gameIsOver && showKeyboard" />
    <game-over-notice v-if="gameIsOver" />
    <main-menu
      @start-game-human-guesser="startGameHumanGuesser"
      @start-game-computer-guesser="startGameComputerGuesser"
    />
  </div>
</template>

<script>
import Gallows from '@/components/Gallows.vue'
import Word from '@/components/Word.vue'
import Keyboard from '@/components/Keyboard.vue'
import GameOverNotice from '@/components/GameOverNotice.vue'
import MainMenu from '@/components/MainMenu.vue'
import wordApiKey from '@/wordApi.js'

export default {
  components: {
    Gallows,
    Word,
    Keyboard,
    GameOverNotice,
    MainMenu
  },
  computed: {
    gameIsOver () {
      return this.$store.state.gameIsOver
    },
    showKeyboard () {
      return this.$store.state.showKeyboard
    }
  },
  methods: {
    startGameHumanGuesser () {
      this.$store.commit('SET_GUESSER_AS_HUMAN', true)
      this.$store.commit('RESTART_GAME', true)
      this.$store.commit('SET_KEYBOARD_VISIBILITY', true)
      this.$store.commit('INITIALIZE_WORD', true)
    },
    async startGameComputerGuesser () {
      this.$store.commit('SET_GUESSER_AS_HUMAN', false)
      this.$store.commit('RESTART_GAME', true)
      this.$store.commit('SET_KEYBOARD_VISIBILITY', false)

      let wordIsValidated = false
      var wordToGuess = ''
      const vm = this
      const dispatcher = {
        async execute () {
          wordToGuess = prompt('Enter a word:').toLowerCase()
          const res = await vm.axios.get(`${vm.$store.state.wordApiBaseUrl}/${wordToGuess}?key=${wordApiKey}`)
          return res.data.includes('def')
        }
      }

      // Prompt user for word till API validates it
      while (!wordIsValidated) {
        wordIsValidated = await dispatcher.execute()
      }

      const wordToGuessLength = wordToGuess.length
      this.$store.commit('SET_WORD_TO_GUESS', wordToGuess)
      this.$store.commit('SET_NB_OF_LETTER_TO_GUESS', wordToGuessLength)
      this.$store.commit('EMPTY_WORD_AS_ARRAY')
      for (var i = 0; i < wordToGuessLength; i++) {
        this.$store.commit('SET_WORD_AS_ARRAY_PUSH')
      }
      while (!this.$store.state.gameIsOver) {
        // for better user experience, computer seems to be "thinking" for a while
        // between each guess
        await this.resolveAfter2Seconds()
        this.$store.dispatch('computerPicksLetter')
      }
    },
    resolveAfter2Seconds () {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved')
        }, 300)
      })
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: sans-serif;
  margin: 0;
}

body,
section {
  text-align: center;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  .app-title {
    font-size: 1.5rem;
    margin: 0.5rem 0;

    @include breakpoint-sm {
      font-size: 2rem;
      margin: 1rem 0;
    }
  }
}

.container {
  padding: 0 1.25rem;

  @include breakpoint-md {
    padding: 0;
  }
}
</style>
