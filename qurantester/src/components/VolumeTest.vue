<template>
  <section class="test-tab">
    <select v-model="choice">
      <option
        v-for="volume in volumes"
        v-bind:key="volume"
        v-bind:value="volume"
      >
        {{ volume }}
      </option>
    </select>
    <br />
    <br />

    <b-button variant="outline-primary" class="button" v-on:click="submit"
      >Start Test</b-button
    >
  </section>
</template>

<script>
export default {
  name: "volumeTest",
  data() {
    return {
      volumes: [],
      choice: 1,
      progress: [],
    };
  },
  methods: {
    submit() {
      if (this.choice) {
        this.$router.push({ name: "volumeTest", params: { id: this.choice } });
      }
    },
    getProgress() {
      this.volumes.forEach((volume) => {
        this.progress.push(localStorage.getItem(volume));
      });

      this.progress.forEach((current) => {
        if (!current) {
          current = 0;
        }
      });
    },
  },
  created() {
    for (let i = 1; i <= 30; i++) {
      this.volumes.push(i);
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
