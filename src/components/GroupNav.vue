<template>
    <div>
        <h2 class="nav__title nav_grid--col-2 nav__grid--row-1">
        {{readableGroupName}}
        <button class="nav__listToggle" v-on:click="toggleGroup()">
            <span v-if="!isShowingGroup">&darr;</span>
            <span v-if="isShowingGroup">&uarr;</span>
        </button>
        </h2>
        <ul
        class="nav__list nav__grid--col-2 nav__grid--row-2"
        v-if="isShowingGroup"
        v-bind:aria-label="(`Books of the ${readableGroupName}`)"
        >
        <li
          class="nav__item"
          v-for="name in bookNames"
          :key="name"
          >
          <a v-on:click="setCurrent(dataGroupName, name)">{{ name }}</a>
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
}
</script>