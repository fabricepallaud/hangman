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
    }
  },
  mounted () {
    this.$store.commit('RESTART_GAME', true)
    this.$store.commit('INITIALIZE_WORD', true)
  }
}
</script>

<style scoped lang="scss">
.word {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.letter-slot {
  background: #ffeaad;
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
