<template>
  <section>
    <div>
      <b-tabs content-class="mt-3" fill>
        <b-tab lazy>
          <template #title><span>Single Volume</span></template>
          <single-volume-test v-bind:item="volumeNumber"
        /></b-tab>
        <b-tab lazy>
          <template #title><span>Multiple Volumes</span></template>
          <multiple-volume-test v-bind:item="volumeNumber"
        /></b-tab>
        <b-tab lazy>
          <template #title><span>Single Volume (Hard)</span></template>
          <single-volume-hard v-bind:item="volumeNumber"
        /></b-tab>
        <b-tab lazy>
          <template #title><span>Multiple Volume (Hard)</span></template>
          <multiple-volume-hard-test v-bind:item="volumeNumber"
        /></b-tab>
        <b-tab title="Chapter Name Test" lazy>
          <template #title><span>Chapter Name Test</span></template>
          <surah-name-test v-bind:item="volumeNumber"
        /></b-tab>
        <b-tab title="Multiple Volume Chapter Name Test" lazy>
          <template #title><span>Multiple Volume Chapter Name Test</span></template>
          <multiple-surah-name-test v-bind:item="volumeNumber" />
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import SingleVolumeTest from "@/components/SingleVolumeTest.vue";
import SingleVolumeHard from "@/components/SingleVolumeHard.vue";
import MultipleVolumeTest from "@/components/MultipleVolumeTest.vue";
import MultipleVolumeHardTest from "@/components/MultipleVolumeHardTest.vue";
import SurahNameTest from "@/components/SurahNameTest.vue";
import MultipleSurahNameTest from "@/components/MultipleSurahNameTest.vue";
export default {
  components: {
    SingleVolumeTest,
    SingleVolumeHard,
    MultipleVolumeTest,
    MultipleVolumeHardTest,
    SurahNameTest,
    MultipleSurahNameTest,
  },
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

<style scoped>
section {
  min-height: 100vh;
  color: black;
  align-items: center;
  background: linear-gradient(to bottom, #7ba9e0, #d2deec, #115292);
}
span {
  color:black
}
</style>
