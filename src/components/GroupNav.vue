<template>
    <div class="navGroup grid">
        <h2 class="navGroup__title nav__title grid__row--1 grid__col--3">
        {{readableGroupName}}
        </h2>
        <button class="navGroup__listToggle
         grid__row--1 grid__col--4 nav__listToggle"
         v-on:click="toggleGroup()"
         >
            <span v-if="!isShowingGroup">&darr;</span>
            <span v-if="isShowingGroup">&uarr;</span>
        </button>
        <ul
        class="nav__list navGroup__list grid__cols--1-4 grid__row--2"
        v-bind:class="{'navGroup__list--collapsed': !isShowingGroup}"
        v-bind:aria-label="(`Books of the ${readableGroupName}`)"
        >
        <li
          class="nav__item navGroup__item"
          v-for="(name, index) in bookNames"
          v-bind:class="(`navGroup__item--row-${(index + 1)%5 || 5 } navGroup__item--${index}`)"
          :key="name"
          >
          <router-link :to="(`/${dataGroupName}/${name}/1`)">{{name}}</router-link>
        </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'GroupNav',
  props: {
    readableGroupName: String,
    dataGroupName: String,
  },
  data() {
    return {
      isShowingGroup: true,
    };
  },
  methods: {
    toggleGroup() {
      this.isShowingGroup = !this.isShowingGroup;
    },
  },
  computed: {
    bookNames() {
      return Object.keys(this.$store.state[this.dataGroupName]);
    },
  },
};
</script>
<style>

.navGroup__title,
.navGroup__listToggle {
  line-height: 1.8rem;
  height: 2rem;
}

.navGroup__listToggle {
  border: none;
  background-color: rgba(155,155,155, .4);
}

.navGroup__list {
  padding: 0 .618rem;
  max-height: 12rem;
  transition: max-height .3s ease-in-out;
}

.navGroup__list--collapsed {
  max-height: 0rem;
  overflow: hidden;
}

.navGroup__list {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.navGroup__item {
  grid-column: 1 / 1;
}

.navGroup__item:nth-child(n+6) {
  grid-column: 2/ 2;
}
.navGroup__item:nth-child(n+11) {
  grid-column: 3/ 3;
}
.navGroup__item:nth-child(n+16) {
  grid-column: 4/ 4;
}
.navGroup__item--row-1 {
  grid-row: 1 / 1;
}
.navGroup__item--row-2 {
  grid-row: 2 / 2;
}
.navGroup__item--row-3 {
  grid-row: 3 / 3;
}
.navGroup__item--row-4 {
  grid-row: 4 / 4;
}
.navGroup__item--row-5 {
  grid-row: 5 / 5;
}

</style>
<style scoped>
.grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 2rem;
}

.grid__row--1 {
  grid-row: 1 / 1;
}

.grid__row--2 {
  grid-row: 2 / 2;
}

.grid__col--1 {
  grid-column: 1 / 1;
}

.grid__col--2 {
  grid-column: 2 / 2;
}

.grid__col--3 {
  grid-column: 3 / 3;
}

.grid__col--4 {
  grid-column: 4 / 4;
}

.grid__cols--1-4 {
  grid-column: 1 / 5;
}

</style>
