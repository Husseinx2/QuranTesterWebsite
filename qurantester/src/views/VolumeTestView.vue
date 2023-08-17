<template>
  <section>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Single Volume" active><single-volume-test v-bind:item="volumeNumber"/></b-tab>
        <b-tab title="Multiple Volumes"><h1>Tab B</h1></b-tab>
        <b-tab title="Single Volume (Hard)"> </b-tab>
        <b-tab title="Multiple Volume (Hard)"> </b-tab>
        <b-tab title="Single Volume Surah Name Test"> </b-tab>
        <b-tab title="Multiple Volume Surah Name Test"> </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import SingleVolumeTest from '@/components/SingleVolumeTest.vue';
export default {
  components: { SingleVolumeTest },
  data() {
    return {
      volumeNumber: 0,
    };
  },
  created() {
    this.volumeNumber = this.$route.params.id;
  },
};
</script>

<style>
</style>
