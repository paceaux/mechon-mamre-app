<template>
    <div class="navGroup grid">
        <h2 class="navGroup__title nav__title grid--row-1 grid--col-3">
        {{readableGroupName}}
        </h2>
        <button class="navGroup__listToggle grid--row-1 grid--col-4 nav__listToggle" v-on:click="toggleGroup()">
            <span v-if="!isShowingGroup">&darr;</span>
            <span v-if="isShowingGroup">&uarr;</span>
        </button>
        <ul
        class="nav__list navGroup__list grid--cols-1-4 grid--row-2"
        v-if="isShowingGroup"
        v-bind:aria-label="(`Books of the ${readableGroupName}`)"
        >
        <li
          class="nav__item"
          v-for="name in bookNames"
          :key="name"
          >
          <a class="nav__link" v-on:click="setCurrent(dataGroupName, name)">{{ name }}</a>
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
<style scoped>
.grid {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 2rem;
}

.grid--row-1 {
  grid-row: 1 / 1;
}

.grid--row-2 {
  grid-row: 2 / 2;
}

.grid--col-1 {
  grid-column: 1 / 1;
}

.grid--col-2 {
  grid-column: 2 / 2;
}

.grid--col-3 {
  grid-column: 3 / 3;
}

.grid--col-4 {
  grid-column: 4 / 4;
}

.grid--cols-1-4 {
  grid-column: 1 / 5;
}

</style>