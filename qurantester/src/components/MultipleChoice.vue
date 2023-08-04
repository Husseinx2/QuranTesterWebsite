<template>
  <form>
    <select v-model="choice">
      <option
        v-for="choice in $store.state.test.multipleChoice"
        v-bind:key="choice"
      >
        {{ choice }}
      </option>
    </select>
    <input type="submit" v-on:click.prevent v-on:click="checkAnswer" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      result: false,
      choice: "",
    };
  },

  methods: {
    checkAnswer() {
      this.result = this.choice == this.$store.state.test.answer.text;
      this.choice ="";
      this.$store.commit("CHECK_ANSWER", this.result);
      if (this.result) {
        this.$store.commit("GENERATE_TEST");
      }
    },
  },
};
</script>

<style scoped>
select {
  font-size: 24px;
}

@media only screen and (max-width: 600px) {
  select {
    font-size: 14px;
  }
}
</style>