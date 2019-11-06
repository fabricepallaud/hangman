<template>
  <div>
    <h1>
      Hangman game
    </h1>
    <gallows />
    <word />
    <keyboard v-if="!gameIsOver" />
    <game-over-notice v-else />
  </div>
</template>

<script>
import Gallows from '@/components/Gallows.vue'
import Word from '@/components/Word.vue'
import Keyboard from '@/components/Keyboard.vue'
import GameOverNotice from '@/components/GameOverNotice.vue'

export default {
  components: {
    Gallows,
    Word,
    Keyboard,
    GameOverNotice
  },
  computed: {
    gameIsOver () {
      return this.$store.state.gameIsOver
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: sans-serif;
}

section {
  margin: 2rem 0;

  &:first-of-type {
    margin-top: 0;
  }
}

body,
section {
  text-align: center;
}

div {
  border-radius: 5px;
}
</style>
