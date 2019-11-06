<template>
  <section>
    <div class="gallows">
      gallows goes here
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    nbOfStrokes () {
      return this.$store.state.nbOfStrokes
    }
  }
}
</script>

<style scoped lang="scss">
.gallows {
  width: 800px;
  max-width: 90vw;
  height: 300px;
  background: #fcfcfc;
  border: 1px solid #dddddd;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
