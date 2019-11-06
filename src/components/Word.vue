<template>
  <section class="word">
    <div class="letter-slot" v-for="(letter, i) in wordToGuessAsArray" :key="i">
      {{ letter }}
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    wordToGuessAsArray () {
      return this.$store.state.wordToGuessAsArray
    },
    wordToGuess () {
      return this.$store.state.wordToGuess
    }
  },
  mounted () {
    const wordsAvailable = this.$store.state.wordsAvailable
    const wordToGuess = wordsAvailable[wordsAvailable.length * Math.random() | 0]
    this.$store.commit('SET_WORD_TO_GUESS', wordToGuess)
    if (this.wordToGuessAsArray.length === 0) {
      for (var i = 0; i < wordToGuess.length; i++) {
        this.$store.commit('SET_WORD_AS_ARRAY_PUSH')
      }
    }
    console.log('word to guess = ' + wordToGuess)
  }
}
</script>

<style scoped lang="scss">
.word {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.letter-slot {
  background: #FFEAAD;
  text-transform: uppercase;
  width: 4rem;
  height: 4rem;
  line-height: 4rem;
  font-size: 3rem;
  font-weight: bold;
  color: purple;
  margin: 0 0.25rem;
}
</style>
