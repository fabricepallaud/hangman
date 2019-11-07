<template>
  <section class="main-menu">
    <button class="player-mode" :class="{ active : guesserIsHuman }" @click="startGameHumanGuesser">
      Human Player
    </button>

    <button class="player-mode" :class="{ active : !guesserIsHuman }" @click="startGameComputerGuesser">
      Computer Player
    </button>
  </section>
</template>

<script>
import wordApiKey from '@/wordApi.js'

export default {
  computed: {
    guesserIsHuman () {
      return this.$store.state.guesserIsHuman
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

      // const wordToGuess = 'jacketa'

      // const wordApiBaseUrl = 'https://www.dictionaryapi.com/api/v1/references/sd4/xml'
      // while (true) {
      //   const wordToGuess = prompt('Enter a word:').toUpperCase()
      //   const endPointUrl = `${wordApiBaseUrl}/${wordToGuess}?key=${wordApiKey}`
      //   this.axios.get(endPointUrl).then(res => {
      //     console.log(res.data)
      //     if (res.data.includes('def')) {
      //       break
      //     }
      //   })
      // }

      var wordToGuess = ''
      const vm = this
      const dispatcher = {
        execute: () => {
          const wordApiBaseUrl = 'https://www.dictionaryapi.com/api/v1/references/sd4/xml'
          wordToGuess = prompt('Enter a word:').toLowerCase()
          vm.axios.get(`${wordApiBaseUrl}/${wordToGuess}?key=${wordApiKey}`).then(res => {
            console.log(res.data)
            if (!res.data.includes('def')) {
              this.execute()
            }
          })
        }
      }
      dispatcher.execute()

      this.$store.commit('SET_WORD_TO_GUESS', wordToGuess)
      this.$store.commit('EMPTY_WORD_AS_ARRAY')
      for (var i = 0; i < wordToGuess.length; i++) {
        this.$store.commit('SET_WORD_AS_ARRAY_PUSH')
      }
      while (!this.$store.state.gameIsOver) {
        // for better user experience, computer seems to be "thinking" for a while
        // between each guess
        await this.resolveAfter2Seconds()
        this.$store.commit('COMPUTER_PICKS_LETTER')
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

<style scoped lang="scss">
.main-menu {
  margin-top: auto;
  display: flex;
}

.player-mode {
  flex: 1 1 auto;
  padding: 15px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &.active {
    background: #6dba2c;
    color: white;
  }
}
</style>
