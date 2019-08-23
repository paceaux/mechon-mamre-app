<template>
  <div class="bible">
  <header class="g-header" role="banner">
    <Intro msg="Mechon Mamre"/>
    <button class="nav__listToggle" v-on:click="toggleBibleNav()" v-bind:aria-pressed="isShowingBibleNav">
      <span v-if="!isShowingBibleNav">&darr;</span>
      <span v-if="isShowingBibleNav">&uarr;</span>
    </button>
    <BibleNav v-bind:class="{'nav--collapsed': !isShowingBibleNav }" role="navigation"/>
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
    }
  },
};
</script>
