<template>
  <header class="g-header">
    <div class="hgroup">
      <h1 class="hgroup__title"><router-link to="/">{{ msg }}</router-link></h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'GlobalHeader',
  props: {
    msg: String,
  },
};
</script>
<style>
.hgroup__title {
  font-size: var(--smallestTitleSize)
}
</style>
