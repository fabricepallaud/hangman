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
        // display letter found
        if (letter === wordToGuess[i]) {
          this.$store.commit('SET_LETTER_IN_WORD_AS_ARRAY', { letter, i })
          letterFound = true
        }
      }
      if (this.$store.state.wordToGuessAsArray.every(x => x !== '')) {
        this.$store.commit('SET_GAME_OVER', true)
        this.$store.commit('SET_GUESSER_WON', true)
      } else if (!letterFound) {
        // if letter doesn't belong to word, make new stroke
        this.$store.commit('INCREMENT_STROKE_COUNTER')
        // hangman complete means game's over
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
  background-color: rgba(255,255,255,0.75);
  font-weight: bold;
  font-size: 1.2rem;
  color: $gray05;
  // text-shadow: $white 1px 1px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.025);
  text-transform: uppercase;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  margin: 0 0.125rem 0.25rem;
  position: relative;
  border: 0;

  @include breakpoint-sm {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    margin: 0 0.25rem 0.5rem;
  }

  @include breakpoint-md {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    margin: 0 0.25rem 0.5rem;
  }

  &:nth-child(n + 11) {
    order: 1;
  }

  &:nth-child(n + 20) {
    order: 2;
  }

  &:hover {
    background: $blue02;
    cursor: pointer;
  }

  &:active {
    top: 1px;
  }

  &:disabled {
    background-color: $blue02;
  }
}
</style>
