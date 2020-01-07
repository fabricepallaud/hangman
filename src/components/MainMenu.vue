<template>
  <section class="main-menu">
    <button class="player-mode" :class="{ active : guesserIsHuman }" @click="startGameHumanGuesser">
      Human Player
    </button>

    <button class="player-mode" :class="{ active : !guesserIsHuman }" @click="startGameComputerGuesser">
      Computer Player
    </button>
  </section>
</template>

<script>
export default {
  computed: {
    guesserIsHuman () {
      return this.$store.state.guesserIsHuman
    }
  },
  methods: {
    startGameHumanGuesser () {
      this.$emit('start-game-human-guesser')
    },
    startGameComputerGuesser () {
      this.$emit('start-game-computer-guesser')
    }
  }
}
</script>

<style scoped lang="scss">
.main-menu {
  // margin-top: auto;
  display: flex;
}

.player-mode {
  flex: 1 1 auto;
  height: 50px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: $gray04;
  text-shadow: $white 1px 1px 0;

  &.active {
    background-color: $blue01;
    color: white;
    text-shadow: none;
  }

  @include breakpoint-sm {
    // padding: 1rem;
  }
}
</style>
