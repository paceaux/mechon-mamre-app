<template>
  <nav class="nav nav--tanakh" role="region" aria-label="Navigate the Tanakh by Torah, Prophets, and Writings">
    <h2 class="nav__title nav__grid--col-1 nav__grid--row-1">
      Torah
      <button class="nav__listToggle" v-on:click="toggleTorah()">
        <span v-if="!isShowingTorah">&darr;</span>
        <span v-if="isShowingTorah">&uarr;</span>
      </button>
    </h2>
    <ul class="nav__list nav__grid--col-1 nav__grid--row-2" 
      v-if="isShowingTorah"
      aria-label="Books of the Torah"
      >
      <li
        class="nav__item"
        v-for="name in torahNames"
        :key="name"
        >
          <a v-on:click="setCurrent('torah', name)">{{ name }}</a>
      </li>
    </ul>
    <h2 class="nav__title nav_grid--col-2 nav__grid--row-1">
      Prophets
      <button class="nav__listToggle" v-on:click="toggleProphets()">
        <span v-if="!isShowingProphets">&darr;</span>
        <span v-if="isShowingProphets">&uarr;</span>
      </button>
    </h2>
    <ul
      class="nav__list nav__grid--col-2 nav__grid--row-2"
      v-if="isShowingProphets"
      aria-label="Books of the Prophets"
      >
      <li
        class="nav__item"
        v-for="name in prophetsNames"
        :key="name"
        >
          <a v-on:click="setCurrent('prophets', name)">{{ name }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'biblebrowser',
  data() {
    return {
      isShowingTorah: true,
      isShowingProphets: true,
    };
  },
  methods: {
    setCurrent(groupName, bookName) {
      this.setGroup(groupName);
      this.setBook(bookName);
    },
    setGroup(groupName) {
      this.$store.commit('groupName', groupName);
    },
    setBook(bookName) {
      this.$store.commit('bookName', bookName);
    },
    toggleTorah(){
      this.isShowingTorah = !this.isShowingTorah;
    },
    toggleProphets(){
      this.isShowingProphets = !this.isShowingProphets;
    }
  },
  computed: {
    torahNames() {
      return Object.keys(this.$store.state.torah);
    },
    prophetsNames() {
      return Object.keys(this.$store.state.prophets);
    },
  },
};
</script>
<style>
.nav {
  font-size: .8rem;
}


.nav--tanakh {
  background-color: #c6d5fa;
}

.nav--tanakh {
  display: grid;
  grid-template-rows: 2rem 8rem;
  grid-template-columns: 1fr 1fr 1fr;
}

.nav--collapsed {
  height: 0;
  overflow: hidden;
}

.nav__grid--row-1 {
  grid-row-start: 1;
  grid-row-end: 2;
}

.nav__grid--row-2 {
  grid-row-start: 2;
  grid-row-end: 2;
}

.nav__grid--col-1 {
  grid-column-start: 1;
  grid-column-end: 2;
}

.nav__grid--col-2 {
  grid-column-start: 2;
  grid-column-end: 3;
}

.nav__list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.nav__item {
  list-style: none;
}
</style>
