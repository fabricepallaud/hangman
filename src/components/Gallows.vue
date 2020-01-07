<template>
  <section class="container">
    <div class="gallows">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="240px" height="260px" viewBox="0 0 240 260" preserveAspectRatio="none">
        <transition name="stroke">
          <line
            v-if="nbOfStrokes > 0"
            x1="5"
            y1="250"
            x2="235"
            y2="250"
            class="gallows"
            shape-rendering="crispEdges"
          />
        </transition>

        <transition name="stroke">
          <line
            v-if="nbOfStrokes > 1"
            x1="5"
            y1="250"
            x2="5"
            y2="5"
            class="gallows"
            shape-rendering="crispEdges"
          />
        </transition>

        <transition name="stroke">
          <line
            v-if="nbOfStrokes > 2"
            x1="5"
            y1="5"
            x2="150"
            y2="5"
            class="gallows"
            shape-rendering="crispEdges"
          />
        </transition>

        <transition name="stroke">
          <line
            v-if="nbOfStrokes > 3"
            x1="150"
            y1="5"
            x2="150"
            y2="50"
            class="gallows"
            shape-rendering="crispEdges"
          />
        </transition>

        <transition name="stroke">
          <circle
            v-if="nbOfStrokes > 4"
            cx="150"
            cy="60"
            r="15"
            class="head"
            shape-rendering="crispEdges"
          />
        </transition>

        <transition name="stroke">
          <line
            v-if="nbOfStrokes > 5"
            x1="150"
            y1="78"
            x2="150"
            y2="120"
            class="top"
            shape-rendering="crispEdges"
          />
        </transition>

        <transition name="stroke">
          <line
            v-if="nbOfStrokes > 6"
            x1="150"
            y1="78"
            x2="180"
            y2="90"
            class="top"
            shape-rendering="crispEdges"
          />
        </transition>

        <transition name="stroke">
          <line
            v-if="nbOfStrokes > 7"
            x1="150"
            y1="78"
            x2="125"
            y2="100"
            class="top"
            shape-rendering="crispEdges"
          />
        </transition>

        <transition name="stroke">
          <line
            v-if="nbOfStrokes > 8"
            x1="150"
            y1="120" x2="170"
            y2="170"
            class="bottom"
            shape-rendering="crispEdges"
          />
        </transition>

        <transition name="stroke">
          <line
            v-if="nbOfStrokes > 9"
            x1="150"
            y1="120"
            x2="127"
            y2="170"
            class="bottom"
            shape-rendering="crispEdges"
          />
        </transition>
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
.stroke-enter,
.stroke-leave-to {
  opacity: 0;
}

.stroke-enter-active,
.stroke-leave-active {
  transition: all .05s cubic-bezier(0.1, 0.7, 1.0, 0.1);
}

.gallows {
  width: 800px;
  max-width: 100%;
  height: 300px;
  background-color: rgba(255,255,255,0.75);
  border: 1px solid $gray02;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

line,
circle {
  stroke-width: 4;
}

.gallows {
  stroke: $brown;
}

.head {
  stroke: $orange01;
  fill: $orange01;
}

.top {
  stroke: $purple;
}

.bottom {
  stroke: $blue01;
}
</style>
