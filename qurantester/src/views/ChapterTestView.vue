<template>
  <section>
    <div>
      <b-tabs content-class="mt-9"  justified>
        <b-tab title="Chapter Test" lazy
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
    if (this.chapterNumber > 114) {
      this.$router.push("/*");
    }
  },
};
</script>

<style scoped>
section{
  min-height: 100vh;
  color:white;
  align-items: center;
  background: linear-gradient(to bottom, #0050b3, #001f3f);
}
</style>
