<template>
  <div class="tester">
    <h1>{{ $store.state.ammountCorrect }}/10</h1>
    <h3 id="popover-target-1">{{ test.question.text }}</h3>
    <b-popover
      class="popover"
      target="popover-target-1"
      triggers="hover"
      placement="center"
    >
      <audio v-bind:src="test.question.audioUrl" controls autoplay />
    </b-popover>
    <b-button variant="info" v-show="!showQuestion" v-on:click="toggleButton"
      >Ready</b-button
    >

    <b-form-group
      label="Choose The Correct Answer"
      v-slot="{ ariaDescribedby }"
      v-show="showQuestion"
    >
      <b-form-radio
        v-for="choice in test.multipleChoice"
        v-bind:key="choice"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        v-bind:value="choice"
      >
        <h4>{{ choice }}</h4></b-form-radio
      >
      <b-button variant="info" v-on:click="submit">Submit</b-button>
    </b-form-group>
  </div>
</template>
<script>
import apiService from "@/services/apiService";
export default {
  data() {
    return {
      test: {},
      selected: "",
      showQuestion: false,
    };
  },
  props: ["item"],
  methods: {
    generateTest() {
      apiService.chapterTest(this.item).then((response) => {
        this.test = response.data;
      });
    },
    toggleButton() {
      if (this.showQuestion) {
        this.showQuestion = false;
      } else {
        this.showQuestion = true;
      }
    },
    submit() {
      if (this.selected) {
        if (this.selected == this.test.answer.text) {
          this.$store.commit("INCREMENT", true);
          if (this.$store.state.ammountCorrect == 10) {
            this.$store.commit("RESET");
            this.$router.push("/test");
          } else {
            this.toggleButton();
            this.generateTest();
          }
        } else {
          console.log("false");
          this.toggleButton();
          this.generateTest();
        }
      }
    },
  },
  created() {
    this.generateTest();
  },
};
</script>

<style scoped>
div .tester {
  font-family: "p22-v1";
  text-align: center;
}
audio {
  width: 100%;
}
.popover {
  width: 350px;
}
</style>