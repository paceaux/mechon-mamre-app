<template>
  <nav class="nav nav--tanakh"
    role="region"
    aria-label="Navigate the Tanakh by Torah, Prophets, and Writings">

    <GroupNav class="nav__group"  readableGroupName="Torah" dataGroupName="torah" />
    <GroupNav class="nav__group" readableGroupName="Prophets" dataGroupName="prophets" />
    <GroupNav class="nav__group" readableGroupName="Writings" dataGroupName="writings" />
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
  height: 2rem;
}

.nav--tanakh {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nav--collapsed {
  height: 0;
  overflow: hidden;
}

.nav__group {
  flex-basis: 16rem;
  position: relative;
}


.nav__list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 12em;
  width: 100%;
}

.nav--tanakh .nav__list {
  position: absolute;
  box-sizing: border-box;
  margin: 0;
}

.nav__item {
  list-style: none;
  text-indent: 0;
  margin:0;
}

.nav__group {
  background-color: var(--colorNeutralDarkest);
}

.nav__list {
  background-color: inherit;
}

.nav__title,
.nav__link {
  color: var(--colorNeutralLighter);
}

.nav__link {
  display: inline-block;
}
</style>
