<template>
  <div class="g-header__hgroup">
    <h1 class="g-header__title">{{ msg }}</h1>
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
.g-header__title {
  font-size: var(--smallestTitleSize)
}
</style>
