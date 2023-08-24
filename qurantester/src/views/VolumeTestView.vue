<template>
  <section>
    <div>
      <b-tabs content-class="mt-3" justified >
        <b-tab title="Single Volume" lazy><single-volume-test v-bind:item="volumeNumber"/></b-tab>
        <b-tab title="Multiple Volumes" lazy><multiple-volume-test v-bind:item="volumeNumber"/></b-tab>
        <b-tab title="Single Volume (Hard)" lazy><single-volume-hard v-bind:item="volumeNumber"/></b-tab>
        <b-tab title="Multiple Volume (Hard)" lazy>  <multiple-volume-hard-test v-bind:item="volumeNumber"/></b-tab>
        <b-tab title="Single Volume Surah Name Test" lazy> <surah-name-test v-bind:item="volumeNumber"/></b-tab>
        <b-tab title="Multiple Volume Surah Name Test" lazy> <multiple-surah-name-test v-bind:item="volumeNumber"/> </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import SingleVolumeTest from '@/components/SingleVolumeTest.vue';
import SingleVolumeHard from '@/components/SingleVolumeHard.vue';
import MultipleVolumeTest from '@/components/MultipleVolumeTest.vue';
import MultipleVolumeHardTest from '@/components/MultipleVolumeHardTest.vue';
import SurahNameTest from '@/components/SurahNameTest.vue';
import MultipleSurahNameTest from '@/components/MultipleSurahNameTest.vue';
export default {
  components: { SingleVolumeTest, SingleVolumeHard ,MultipleVolumeTest,MultipleVolumeHardTest,SurahNameTest,MultipleSurahNameTest},
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
