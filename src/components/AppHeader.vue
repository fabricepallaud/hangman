<template>
  <section class="app-header">
    <h1 class="app-title">
      Hangman
    </h1>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.app-header {
  height: 50px;
  background: $blue01;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
    color: white;
    text-transform: uppercase;
    font-size: 1.4rem;
  }
}
</style>
