<template>
  <section class="keyboard">
    <div class="letter" v-for="(letter, i) in letters" :key="i">
      {{ letter }}
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      letters: [
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.keyboard {
  display: flex;
  justify-content: center;
  flex-flow: row wrap;

  &:before,
  &:after {
    content: '';
    width: 100%;
    order: 1;
  }
}

.letter {
  background: #eeeeee;
  text-transform: uppercase;
  padding: 0.75rem 1rem;
  margin: 0 0.25rem 0.5rem;

  &:nth-child(n + 11) {
    order: 1;
  }

  &:nth-child(n + 20) {
    order: 2;
  }

  &:hover {
    background: #dddddd;
    cursor: pointer;
  }
}
</style>
