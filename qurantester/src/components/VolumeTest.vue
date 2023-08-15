<template>
  <section class="test-tab">
    <select v-show="true">
      <option v-for="volume in volumes" v-bind:key="volume" value="volume">
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
  name:'volumeTest',
  data() {
    return {
      showSelect: true,
      volumes: [],
    };
  },
  created() {
    for (let i = 1; i <= 30; i++) {
      this.volumes.push(i);
    }
  },
};
</script>

<style>
.test-tab select option {
  font-family: "hafs";
  font-size: 15px;
}
</style>