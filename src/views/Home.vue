<template>
  <div class="bible">
  <header class="g-header" role="banner">
    <Intro class="g-header__hgroup" msg="Mechon Mamre"/>
    <button class="nav__listToggle" v-on:click="toggleBibleNav()" v-bind:aria-pressed="isShowingBibleNav">
      <span v-if="!isShowingBibleNav">&darr;</span>
      <span v-if="isShowingBibleNav">&uarr;</span>
    </button>
    <BibleNav class="nav--tanakh" v-bind:class="{'nav--collapsed': !isShowingBibleNav }" role="navigation"/>
  </header>
  <main>
    <BookViewer />
  </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from '@/components/Intro.vue';
import BibleNav from '@/components/BibleNav.vue';
import BookViewer from '@/components/BookViewer.vue';

export default {
  name: 'home',
  components: {
    Intro,
    BibleNav,
    BookViewer,
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
.g-header {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 12rem 3rem 1fr;
}


.nav--tanakh {
  height: 2rem;
  max-width: 100%;
  transition: max-width .3s ease-in-out;
}

.nav--tanakh {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
  height: 2rem;
  overflow: hidden;
}

.nav--collapsed .nav__group {
  flex-basis: 8rem;
}

</style>
