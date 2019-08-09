<template>
  <div class="bible">
  <header class="g-header">
    <Intro msg="JPS Hebrew-english Tanakh"/>
    <button class="nav__listToggle" v-on:click="toggleBibleNav()">
      <span v-if="!isShowingBibleNav">&darr;</span>
      <span v-if="isShowingBibleNav">&uarr;</span>
    </button>
    <BibleNav v-bind:class="{'nav--collapsed': !isShowingBibleNav }"/>
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
