<template>
  <section class="test-tab">
    Choose The Surah You Want To Be Tested In: <br />
    <select v-model="choice">
      <option
        v-for="chapter in $store.state.chapters"
        v-bind:key="chapter.number"
        v-bind:value="chapter.number"
      >
        {{ chapter.number }}. {{ chapter.englishName }} || {{ chapter.name }}
      </option>
    </select>
    <br />
    <span v-show="errorMessage"> 
    <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon> Choose A Valid Choice
    </span>
    <br />
    <b-button variant="outline-info" v-on:click="submit">Start Test</b-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      choice: 0,
      errorMessage: false,
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
  },
};
</script>
<style>
.test-tab select option {
  font-family: "hafs";
  font-size: 15px;
}
</style>