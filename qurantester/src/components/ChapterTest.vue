<template>
  <div class="question">
    
<button v-show="!showTest" v-on:click="toggleTest"> Generate Test</button>
  <div v-show="showTest">
    <h1> {{$store.state.amountCorrect}}</h1>
    <div  v-show="showQuestion" v-if="test">
      <h1>select the Next Verse</h1>
      <h1>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
      <h2 >{{ test.question.text }}</h2>
    </div>
    <h4 v-show="showChoices">Choose the correct option:</h4>
    <button v-show="!showChoices" v-on:click="showChoice">Ready</button>
    <multiple-choice class="multipleChoice" v-show="showChoices" />
    <button v-show="!AudioShown" v-on:click="showAudio">Listen to Audio</button>
    <br/>
    <audio v-show="AudioShown" controls v-bind:src="test.question.audioUrl" />
    </div>
  </div>
</template>

<script>
import MultipleChoice from "./MultipleChoice.vue";
export default {
  name: "ChapterTest",
  components: {
    MultipleChoice,
  },
  data() {
    return {
      AudioShown: false,
      showChoices: false,
      showQuestion: true,
      showTest:false
    };
  },
  methods: {
    showAudio() {
      this.AudioShown = true;
    },
    showChoice() {
      this.showChoices = true;
    },
    toggleTest() {
      this.showTest = true
    }
  },
  computed: {
    test() {
      return this.$store.state.test;
    },
    isCorrect() {
      return this.$store.state.userCorrect;
    },
   
  },
};
</script>

<style scoped>
.multipleChoice {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
