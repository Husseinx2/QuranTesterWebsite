<template>
  <section>
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Single Chapter" active
          ><single-chapter-test v-bind:item="chapterNumber"/></b-tab>
        <b-tab title="Multiple Chapters"><h1>Tab B</h1></b-tab>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import SingleChapterTest from '@/components/SingleChapterTest.vue';
export default {
  components:{SingleChapterTest},
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

<style>
</style>
