<template>
  <section>
    <div class="gallows">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="240px" height="260px" viewBox="0 0 240 260" preserveAspectRatio="none">
        <line v-if="nbOfStrokes > 0" x1="5" y1="250" x2="235" y2="250" shape-rendering="crispEdges" />
        <line v-if="nbOfStrokes > 1" x1="5" y1="250" x2="5" y2="5" shape-rendering="crispEdges" />
        <line v-if="nbOfStrokes > 2" x1="5" y1="5" x2="150" y2="5" shape-rendering="crispEdges" />
        <line v-if="nbOfStrokes > 3" x1="150" y1="5" x2="150" y2="50" shape-rendering="crispEdges" />
        <circle v-if="nbOfStrokes > 4" cx="150" cy="60" r="15" shape-rendering="crispEdges" />
        <line v-if="nbOfStrokes > 5" x1="150" y1="75" x2="150" y2="120" shape-rendering="crispEdges" />
        <line v-if="nbOfStrokes > 6" x1="150" y1="80" x2="180" y2="90" shape-rendering="crispEdges" />
        <line v-if="nbOfStrokes > 7" x1="150" y1="80" x2="125" y2="100" shape-rendering="crispEdges" />
        <line v-if="nbOfStrokes > 8" x1="150" y1="120" x2="170" y2="170" shape-rendering="crispEdges" />
        <line v-if="nbOfStrokes > 9" x1="150" y1="120" x2="127" y2="170" shape-rendering="crispEdges" />
      </svg>
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

line {
  stroke: #000000;
}

circle {
  fill: #ffffff;
  stroke: #000000;
}
</style>
