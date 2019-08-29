<template>
  <header class="g-header">
    <div class="g-header__hgroup hgroup">
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


.g-header__hgroup {
  flex-basis: 12rem;
  flex-grow: 1;
  align-self: flex-start;
  justify-self: flex-start;
}

.hgroup__title {
  font-size: var(--smallestTitleSize)
}


</style>
