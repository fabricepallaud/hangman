<template>
  <div class="app">
    <h1>
      Hangman
    </h1>
    <gallows />
    <word />
    <keyboard v-if="!gameIsOver && showKeyboard" />
    <game-over-notice v-if="gameIsOver" />
    <main-menu />
  </div>
</template>

<script>
import Gallows from '@/components/Gallows.vue'
import Word from '@/components/Word.vue'
import Keyboard from '@/components/Keyboard.vue'
import GameOverNotice from '@/components/GameOverNotice.vue'
import MainMenu from '@/components/MainMenu.vue'

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
  }
}
</script>

<style lang="scss">
body {
  font-family: sans-serif;
  margin: 0;
}

// section {
//   margin: 2rem 0;

//   &:first-of-type {
//     margin-top: 0;
//   }
// }

body,
section {
  text-align: center;
}

div {
  border-radius: 5px;
}

.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
