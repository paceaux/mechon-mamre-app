<template>
  <div id="app">
    <GlobalHeader class="g-header__hgroup" msg="Mechon Mamre"/>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <GlobalFooter />
  </div>
</template>
<script>
import GlobalHeader from '@/components/GHeader.vue';
import GlobalFooter from '@/components/GFooter.vue';
export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>
<style>

html, body {
  min-height: 100%;
}

html {
  --colorNeutralDarkest: rgb(27,27,27);
  --colorNeutralLightest: rgb(245,245,245);
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}

.bible {
  min-height: 90vh;
}

.g-footer {

}
</style>
