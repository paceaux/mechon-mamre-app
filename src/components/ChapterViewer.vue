<template>
  <article class="book__chapter chapter" v-if="chapter" role="article" v-bind:aria-label="chapter.canonicalTitle">
    <h2 class="chapter__title">{{chapter.canonicalTitle}}</h2>
    <article
      class="chapter__verse"
      v-for="verse of verses"
      v-bind:key="(`verse-${verse.verseNumber}`)"
      role="row"
      v-bind:aria-label="(`Verse ${verse.verseNumber}`)"
      >
      <h3 class="chapter__verseNumber">{{verse.verseNumber}}</h3>
      <p class="chapter__verseText" lang="en" aria-label="english">{{verse.english}}</p>
      <p class="chapter__verseText" lang="he" aria-label="hebrew">{{verse.hebrew}}</p>
    </article>
  </article>
</template>
<script>
export default {
  name: 'chapterviewer',
  methods: {

  },
  computed: {
    chapter() {
      return this.$store.getters.currentChapter;
    },
    verses() {
      let verses = {};

      // yeah destructuring is cute until a compiler can't tell that it's af if block
      // eslint-disable-next-line
      if (this.chapter) verses = this.chapter.verses;

      return verses;
    },
  },
};
</script>
<style>
.chapter__verse {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 4ch calc(50% - 2ch - .5em) calc(50% - 2ch - .5em);
  grid-column-gap: 1em;
  margin-bottom: .618em;
}

.chapter__verse:hover {
  background-color: rgba(100,200, 200, .3);
}

</style>
