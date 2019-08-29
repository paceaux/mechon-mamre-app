<template>
  <section class="book" role="main">
    <header class="book__header">
      <h1 class="book__bookName" v-if="book && book.bookName">
        <span class="en" lang="en">{{book.bookName.english}}</span>
        <span class="he" lang="he">{{book.bookName.hebrew}}</span>
        </h1>
      <button v-on:click="toggleChapters()" v-bind:aria-pressed="isShowingChapters">
        <span v-if="!isShowingChapters">&darr;</span>
        <span v-if="isShowingChapters">&uarr;</span>
      </button>
      <nav
        class="nav book__nav nav--chapters"
        v-if="isShowingChapters"
        >
        <ul class="nav__list" v-bind:aria-label="(`Chapters of ${book.canonicalBookName}`)">
          <li
            class="nav__item"
            v-for="chapter of chapters"
            v-bind:key="(`chapter-nav-${chapter.chapterNumber}`)"
            >
            <router-link
              class="nav__itemLink"
              :to="(`/${currentGroupName}/${currentBookName}/${chapter.chapterNumber}`)">
                {{chapter.chapterNumber}}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <ChapterViewer
      v-bind:title="currentChapter.canonicalTitle"
      v-bind:verses="currentChapter.verses"
    />
    <footer class="book__footer">
      <button v-on:click="toggleChapters()">
        <span v-if="!isShowingChapters">&darr;</span>
        <span v-if="isShowingChapters">&uarr;</span>
      </button>
      <nav class="nav book__nav nav--chapters" v-if="isShowingChapters">
        <ul class="nav__list">
          <li
            class="nav__item"
            v-for="chapter of chapters"
            v-bind:key="(`chapter-nav-${chapter.chapterNumber}`)"
            >
            <router-link
              class="nav__itemLink"
              :to="(`/${currentGroupName}/${currentBookName}/${chapter.chapterNumber}`)">
                {{chapter.chapterNumber}}
            </router-link>
          </li>
        </ul>
      </nav>
    </footer>
  </section>
</template>
<script>
import ChapterViewer from '@/components/ChapterViewer.vue';

export default {
  name: 'bookviewer',
  components: {
    ChapterViewer,
  },
  data() {
    return {
      isShowingChapters: true,
    };
  },
  methods: {
    toggleChapters() {
      this.isShowingChapters = !this.isShowingChapters;
    },
  },
  computed: {
    currentGroupName() {
      const groupName = this.$route.params.group || 'torah';
      return groupName;
    },
    currentBookName() {
      const bookName = this.$route.params.book || 'Genesis';
      return bookName;
    },
    currentChapterNumber() {
      const chapterNumber = this.$route.params.chapter || '1';
      return chapterNumber;
    },
    book() {
      const group = this.currentGroupName;
      const book = this.currentBookName;
      return this.$store.state[group][book].default;
    },
    chapters() {
      return this.book.chapters;
    },
    currentChapter() {
      return this.chapters[this.currentChapterNumber];
    },
  },
};
</script>
<style>
.nav--chapters {
  font-size: var(--baseTextSize);
}

.nav--chapters .nav__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

.nav--chapters .nav__item{
  display: inline-block;
  flex-grow: 0;
  text-indent: 0;
  font-size: var(--bigText);
  flex-basis: 5ch;
  border: 1px solid;
  border-radius: 2px;
  margin: .282rem  .618rem;
}

.nav--chapters .nav__itemLink {
  display: inline-block;
  text-align: center;
  width: 100%;
}

.book__bookName {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
