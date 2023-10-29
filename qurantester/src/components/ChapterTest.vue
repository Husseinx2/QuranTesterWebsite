<template>
  <section class="test-tab">
    Choose The Surah You Want To Be Tested In: <br />
    <select v-model="choice">
      <option
        v-for="chapter in $store.state.chapters"
        v-bind:key="chapter.number"
        v-bind:value="chapter.number"
      >
        {{ chapter.number }}. {{ chapter.englishName }} || {{ chapter.name }} ||
        <span>Score: {{ progress[chapter.number - 1] }}/10</span>
      </option>
    </select>
    <br />
    <span v-show="errorMessage">
      <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon> Choose
      A Valid Choice
    </span>
    <br />
    <b-button variant="outline-primary" v-on:click="submit" class="button"
      >Start Test</b-button
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      choice: 0,
      errorMessage: false,
      progress: [],
      chapterNumbers: [],
    };
  },
  methods: {
    submit() {
      if (this.choice) {
        this.$router.push({ name: "chaptertest", params: { id: this.choice } });
      } else {
        this.errorMessage = true;
      }
    },
    getProgress() {
      this.chapterNumbers.forEach((chapter) => {
        let score = localStorage.getItem(chapter);
        if (score) {
          this.progress.push(localStorage.getItem(chapter));
        }
        else {
          this.progress.push(0);
        }
      });
    },
  },
  created() {
    for (let i = 101; i <= 214; i++) {
      this.chapterNumbers.push(i);
    }
    this.getProgress();
  },
};
</script>
<style scoped>
.button {
  color: black;
}
.button:hover {
  background-color: white;
}
.test-tab select option {
  font-family: "hafs";
  font-size: 15px;
}
section {
  text-align: center;
}
</style>