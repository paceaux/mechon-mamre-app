<template>
  <nav class="nav nav--tanakh"
    role="region"
    aria-label="Navigate the Tanakh by Torah, Prophets, and Writings">

    <GroupNav readableGroupName="Torah" dataGroupName="torah" />
    <GroupNav readableGroupName="Prophets" dataGroupName="prophets" />
    <GroupNav readableGroupName="Writings" dataGroupName="writings" />
  </nav>
</template>
<script>
import GroupNav from '@/components/GroupNav.vue';

export default {
  name: 'BibleNav',
  components: {
    GroupNav,
  },
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
    toggleTorah() {
      this.isShowingTorah = !this.isShowingTorah;
    },
    toggleProphets() {
      this.isShowingProphets = !this.isShowingProphets;
    },
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
