<template>
  <section class="word container">
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
  // margin: 1.5rem 0;

  @include breakpoint-sm {
    // margin: 2rem 0;
  }
}

.letter-slot {
  background-color: $orange01;
  text-transform: uppercase;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: $purple;
  margin: 0 0.1rem;
  border-radius: 1px;

  @include breakpoint-sm {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.25rem;
    margin: 0 0.15rem;
    border-radius: 5px;
  }

  @include breakpoint-sm {
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 3rem;
    margin: 0 0.25rem;
  }
}
</style>
