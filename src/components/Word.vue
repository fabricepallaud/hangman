<template>
  <section class="word">
    <div class="letter-slot" v-for="(letter, i) in wordToGuess" :key="i">
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
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
      wordToGuess: null
    }
  },
  mounted () {
    this.wordToGuess = this.wordsAvailable[this.wordsAvailable.length * Math.random() | 0]
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
  background: #eeeeee;
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
