<template>
  <div class="bible">
  <header class="g-header" role="banner">
    <button class="nav__listToggle"
      v-on:click="toggleBibleNav()"
      v-bind:aria-pressed="isShowingBibleNav"
      >
      <span v-if="!isShowingBibleNav">&larr;</span>
      <span v-if="isShowingBibleNav">&rarr;</span>
    </button>
    <BibleNav
      class="nav--tanakh"
      v-bind:class="{'nav--collapsed': !isShowingBibleNav }"
      role="navigation"
    />
  </header>
  <main>
    <header>
    </header>
    <BookViewer />
  </main>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalHeader from '@/components/GHeader.vue';
import BibleNav from '@/components/BibleNav.vue';
import BookViewer from '@/components/BookViewer.vue';

export default {
  name: 'reader',
  components: {
    GlobalHeader,
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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.g-header__hgroup {
  flex-basis: 12rem;
  flex-grow: 1;
  align-self: flex-start;
  justify-self: flex-start;
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
