<template>
  <div>
    <p v-if="guesserWon">
      Guesser wins!
    </p>
    <p v-else>
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
</style>
