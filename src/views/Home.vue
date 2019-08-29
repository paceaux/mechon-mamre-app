<template>
  <main class="bible">
  <header class="bible__header" role="banner">
    <button class="nav__listToggle"
      v-on:click="toggleBibleNav()"
      v-bind:aria-pressed="isShowingBibleNav"
    >
      <span v-if="!isShowingBibleNav">&larr;</span>
      <span v-if="isShowingBibleNav">&rarr;</span>
    </button>
    <BibleNav class="nav--tanakh"
      v-bind:class="{'nav--collapsed': !isShowingBibleNav }"
      role="navigation"
    />
  </header>
  <section>
    <header>
      <h1>The Tanakh: Torah, Neviim, Kethuvim</h1>
      <p>The Histories, prophets, and writings of the old testament.</p>
      <p>This is an experiment going terribly wrong. All data is produced from python scripts that scraped mechon-mamre.</p>
    </header>
  </section>
  </main>
</template>

<script>
// @ is an alias to /src
import BibleNav from '@/components/BibleNav.vue';

export default {
  name: 'home',
  components: {
    BibleNav,
  },
  data() {
    return {
      isShowingBibleNav: true,
    };
  },
  methods: {
    toggleBibleNav() {
      this.isShowingBibleNav = !this.isShowingBibleNav;
    },
  },
};
</script>
<style>
.bible__header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.nav--tanakh {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 2rem;
  flex-basis: 75%;
  transition: flex-basis .3s ease-in-out;
}

.nav--tanakh .nav__list {
  position: absolute;
  box-sizing: border-box;
  margin: 0;
}

.nav--tanakh .nav__group{
  transition-delay: .3s;
  transition: flex-basis .2s ease-in-out;
}

.nav--collapsed {
  font-size: var(--smallestTextSize);
  flex-basis: 40.5%;
  height: 2rem;
  overflow: hidden;
}

.nav--collapsed .nav__group {
  flex-basis: 8rem;
}

</style>
