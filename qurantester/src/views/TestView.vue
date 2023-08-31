<template>
  <section class="section">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab active>
          <template #title><span>Test By Chapter</span></template>
          <p><chapter-test /></p
        ></b-tab>
        <b-tab>
          <template #title><span>Test By Volume</span></template>
          <volume-test
        /></b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import ChapterTest from "@/components/ChapterTest.vue";
import VolumeTest from "@/components/VolumeTest.vue";
export default {
  components: { ChapterTest, VolumeTest },
};
</script>

<style scoped>
.section {
  min-height: 100vh;
  align-items: center;
  background: linear-gradient(to bottom, #7ba9e0, #d2deec, #115292);
}
span {
  color:black
}
</style>
