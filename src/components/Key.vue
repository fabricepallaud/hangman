<template>
  <button :disabled="disabled" @click="checkLetter(letter)">
    {{ letter }}
  </button>
</template>

<script>
export default {
  props: {
    letter: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      disabled: false
    }
  },
  methods: {
    checkLetter (letter) {
      const wordToGuess = this.$store.state.wordToGuess
      this.disabled = true
      let letterFound = false
      for (var i = 0; i < wordToGuess.length; i++) {
        if (letter === wordToGuess[i]) {
          this.$store.commit('SET_WORD_AS_ARRAY', { letter, i })
          letterFound = true
        }
      }
      if (this.$store.state.wordToGuessAsArray.every(x => x !== '')) {
        this.$store.commit('SET_GAME_OVER', true)
        this.$store.commit('SET_GUESSER_WON', true)
      }
      if (!letterFound) {
        this.$store.commit('INCREMENT_STROKE_COUNTER')
        if (this.$store.state.nbOfStrokes === 10) {
          this.$store.commit('SET_GAME_OVER', true)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.letter {
  background: #eeeeee;
  text-transform: uppercase;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  margin: 0 0.25rem 0.5rem;
  position: relative;
  border: 0;

  &:nth-child(n + 11) {
    order: 1;
  }

  &:nth-child(n + 20) {
    order: 2;
  }

  &:hover {
    background: #dddddd;
    cursor: pointer;
  }

  &:active {
    top: 1px;
  }

  &:disabled {
    background: #dddddd;
  }
}
</style>
