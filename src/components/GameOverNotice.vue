<template>
  <div class="game-over">
    <p v-if="guesserWon" class="win">
      Guesser wins!
    </p>
    <p v-else class="lose">
      Guesser loses!
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    guesserWon () {
      return this.$store.state.guesserWon
    }
  }
}
</script>

<style lang="scss">
.game-over {
  p {
    font-size: 1.5rem;
    font-weight: bold;

    &.win {
      color: #6dba2c;
    }

    &.lose {
      color: red;
    }
  }
}
</style>
