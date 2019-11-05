<template>
  <div>
    <h1>
      Hangman game
    </h1>
    <gallows />
    <word />
    <keyboard />
  </div>
</template>

<script>
import Gallows from '@/components/Gallows.vue'
import Word from '@/components/Word.vue'
import Keyboard from '@/components/Keyboard.vue'

export default {
  components: {
    Gallows,
    Word,
    Keyboard
  }
}
</script>

<style lang="scss">
body {
  font-family: sans-serif;
}

section {
  margin: 3rem 0;

  &:first-of-type {
    margin-top: 0;
  }
}

body,
section {
  text-align: center;
}
</style>
