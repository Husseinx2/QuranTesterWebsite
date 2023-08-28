<template>
  <section class="section">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Test By Chapter" active
          ><p><chapter-test /></p
        ></b-tab>
        <b-tab title="Test By Volume"><volume-test /></b-tab>
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
</style>
