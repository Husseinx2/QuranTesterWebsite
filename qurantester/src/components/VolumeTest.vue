<template>
  <section class="test-tab">
    <select  v-model="choice">
      <option v-for="volume in volumes" v-bind:key="volume" v-bind:value="volume">
        {{ volume }}
      </option>
    </select>
    <br />
    <br />

    <b-button variant="outline-info" v-on:click="submit">Start Test</b-button>
  </section>
</template>

<script>
export default {
  name: "volumeTest",
  data() {
    return {
      volumes: [],
      choice: 1
    };
  },
  methods: {
    submit() {
      if (this.choice) {
        this.$router.push({ name: "volumeTest", params: { id: this.choice } });
      }
    },
  },
  created() {
    for (let i = 1; i <= 30; i++) {
      this.volumes.push(i);
    }
  },
};
</script>

<style scoped>
.test-tab select option {
  font-family: "hafs";
  font-size: 15px;
}
section {
  text-align: center;
}
</style>