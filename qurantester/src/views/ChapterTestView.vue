<template>
  <section>
    <div>
      <b-tabs content-class="mt-9">
        <b-tab title="Single Chapter"  lazy
          ><single-chapter-test v-bind:item="chapterNumber"  /></b-tab>
        <b-tab title="Hard Chapter Test" lazy
          ><hardchapter-test v-bind:item="chapterNumber" />
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

<style></style>
