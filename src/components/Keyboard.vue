<template>
  <section class="keyboard">
    <key class="letter" v-for="(letter) in letters" :key="letter" :letter="letter" />
  </section>
</template>

<script>
import Key from '@/components/Key.vue'

export default {
  components: {
    Key
  },
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
      ],
      disabled: false
    }
  },
  methods: {
    computerPicksRandomLetter () {
      // const randomLetter = this.letters[26 * Math.random() | 0]
      // alert(randomLetter)
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
</style>
