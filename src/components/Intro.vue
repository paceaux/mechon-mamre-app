<template>
  <div class="hgroup">
    <h1 class="hgroup__title">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Intro',
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
