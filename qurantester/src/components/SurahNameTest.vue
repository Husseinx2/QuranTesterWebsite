<template>
  <div class="tester">
    <!-- Amount Correct -->
    <h1>{{ ammountCorrect }}/10</h1>
    <!-- Question -->
    <h3 id="popover-target-1">{{ test.verse.text }}</h3>
    <b-popover
      class="popover"
      target="popover-target-1"
      triggers="click"
      placement="center"
    >
      <audio v-bind:src="test.verse.audioUrl" controls autoplay />
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
      <select v-model="selected" :aria-describedby="ariaDescribedby">
        <option
          v-for="chapter in $store.state.chapters"
          v-bind:key="chapter"
          v-bind:value="chapter.name"
        >
          {{ chapter.number }}. {{ chapter.englishName }} || {{ chapter.name }}
        </option>
      </select>
      <br />
      <span v-show="errorMessage">
        <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon>
        Choose A Valid Choice
      </span>
      <br />
      <b-button variant="info" v-on:click="submit">Submit</b-button>
    </b-form-group>

    <!-- Correct Answer If Wrong -->
    <section v-show="showAnswer">
      <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
      Incorrect, the correct Answer is:
      <h3 id="popover-target-2">{{ test.name.name }}</h3>
      <b-popover
        class="popover"
        target="popover-target-2"
        triggers="click"
        placement="center"
      >
        {{ test.name.number }}. {{ test.name.englishName }}
      </b-popover>
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
      ammountCorrect: 0,
      errorMessage: false,
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
        this.errorMessage = false;
        if (this.selected == this.test.name.name) {
          this.selected = "";
          this.ammountCorrect += 1;
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
      } else {
        this.errorMessage = true;
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
