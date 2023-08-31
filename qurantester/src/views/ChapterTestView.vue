<template>
  <section>
    <div>
      <b-tabs content-class="mt-9">
        <b-tab lazy>
          <template #title><span>Chapter Test</span></template>
          <single-chapter-test v-bind:item="chapterNumber"
        /></b-tab>
        <b-tab lazy>
          <template #title><span>Hard Chapter Test</span></template>
          <hardchapter-test v-bind:item="chapterNumber" />
        </b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import SingleChapterTest from "@/components/SingleChapterTest.vue";
import hardchapterTest from "@/components/HardChapterTest.vue";
export default {
  components: { SingleChapterTest, hardchapterTest },
  data() {
    return {
      chapterNumber: 0,
    };
  },
  created() {
    this.chapterNumber = this.$route.params.id;
  },
};
</script>

<style scoped>
section {
  min-height: 100vh;
  color: black;
  align-items: center;
  background: linear-gradient(to bottom, #7ba9e0, #d2deec, #001f3f);
}
span {
  color: black;
}
</style>
