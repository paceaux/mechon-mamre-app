import Vue from 'vue';
import Vuex from 'vuex';

import { Torah, Prophets } from './data';

const BOOKS = { ...Torah, ...Prophets };
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentGroupName: '',
    currentBookName: '',
    currentChapter: 0,
    torah: Torah,
    prophets: Prophets,
  },
  mutations: {
    groupName(state, groupName) {
      state.currentGroupName = groupName;
    },
    bookName(state, bookName) {
      state.currentBookName = bookName;
    },
    chapter(state, chapter) {
      state.currentChapter = `${chapter}`;
    },
  },
  getters: {
    currentBook: (state) => {
      let currentBook = {};
      if (state.currentBookName) {
        currentBook = BOOKS[state.currentBookName].default;
      }
      return currentBook;
    },
    currentChapter: (state) => {
      const hasCurrentBook = !!state.currentBookName;
      let currentChapter = {};
      if (hasCurrentBook && state.currentChapter) {
        const currentBook = BOOKS[state.currentBookName].default;
        currentChapter = currentBook.chapters[state.currentChapter];
      }
      return currentChapter;
    },
  },
});
