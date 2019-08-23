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
    };
  },
  methods: {

  },
  computed: {

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
