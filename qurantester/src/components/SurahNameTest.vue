<template>
  <div class="tester">
    <!-- Amount Correct -->
    <h1>{{ammountCorrect}}/10</h1>
    <!-- Question -->
    <h3 id="popover-target-1">{{ test.verse.text }}</h3>
    <b-popover
      class="popover"
      target="popover-target-1"
      triggers="hover"
      placement="center"
    >
      <audio v-bind:src="verse.question.audioUrl" controls autoplay />
    </b-popover>
    <!-- prompt to display the question -->
    <b-button
      variant="info"
      v-show="!showQuestion && !showAnswer"
      v-on:click="toggleButton"
      >Ready</b-button
    >
    <!-- Form -->
    <b-form-group
      label="Select The Correct Chapter"
      v-slot="{ ariaDescribedby }"
      v-show="showQuestion"
    >
      <b-form-radio
        v-for="chapter in $store.state.chapters"
        v-bind:key="chapter"
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        v-bind:value="chapter"
      >
        <h4>{{ chapter }}</h4></b-form-radio
      >
      <b-button variant="info" v-on:click="submit">Submit</b-button>
    </b-form-group>

    <!-- Correct Answer If Wrong -->
    <section v-show="showAnswer">
      <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
      Incorrect, the correct Answer is:
      <h3 id="popover-target-2">{{ test.name.englishName }}</h3>
      <b-button variant="info" v-on:click="hideAnswer">Continue</b-button>
    </section>
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
      showAnswer: false,
      ammountCorrect:0
    };
  },
  props: ["item"],
  methods: {
    generateTest() {
      apiService.NameTest(this.item).then((response) => {
        this.test = response.data;
      });
    },
    hideAnswer() {
      this.showAnswer = false;
      this.selected = "";
      this.generateTest();
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
        if (this.selected == this.test.name) {
          this.selected = "";
          this.ammountCorrect +=1;
          if (this.$store.state.ammountCorrect == 10) {
            this.$router.push("/test");
          } else {
            this.toggleButton();
            this.generateTest();
          }
        } else {
          this.showQuestion = false;
          this.showAnswer = true;
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