<template>
  <div class="tester">
    <section class="test-tab" v-show="showSelect">
      <h4>Specify the ending volume for testing.</h4>
      <span
        >(You will be evaluated from the volume you've already chosen to the
        volume you indicate.)</span
      >
      <br />
      <select v-model="choice">
        <option
          v-for="volume in volumes"
          v-bind:key="volume"
          v-bind:value="volume"
        >
          {{ volume }}
        </option>
      </select>
      <br />
      <br />
      <b-button variant="outline-primary" class="button" v-on:click="startTest"
        >Start Test</b-button
      >
    </section>
    <div v-show="showTest">
      <h1>{{ ammountCorrect }}/10</h1>
      <p id="popover-target-1" class="question">{{ test.question.text }}</p>
      <b-popover
        class="popover"
        target="popover-target-1"
        triggers="click"
        placement="center"
      >
        <p>{{ test.question.translation }}</p>

        <audio v-bind:src="test.question.audioUrl" controls autoplay />
      </b-popover>
      <b-button
        variant="info"
        v-show="!showQuestion && !showAnswer"
        v-on:click="toggleButton"
        >Ready</b-button
      >

      <b-form-group
        label="Select The Next Verse"
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
      <!-- Correct Answer If Wrong -->
      <section v-show="showAnswer">
        <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
        Incorrect, the correct Answer is:
        <h3 id="popover-target-2">{{ test.answer.text }}</h3>
        <b-popover
          class="popover"
          target="popover-target-2"
          triggers="click"
          placement="center"
        >
          <p>{{ test.answer.translation }}</p>
          <audio v-bind:src="test.answer.audioUrl" controls autoplay />
        </b-popover>
        <b-button variant="info" v-on:click="hideAnswer">Continue</b-button>
      </section>
    </div>
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
      showTest: false,
      volumes: [],
      choice: 1,
      showSelect: true,
      QuestionsAsked:0
    };
  },
  props: ["item"],
  methods: {
    startTest() {
      if (this.choice) {
        this.showSelect = false;
        this.showTest = true;
        this.generateTest();
      }
    },
    generateTest() {
      this.test = {};
      apiService
        .multipleVolumesTest(this.item, this.choice)
        .then((response) => {
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

     hideAnswer() {
      this.showAnswer = false;
      this.selected = "";
      if (this.QuestionsAsked == 10) {
        this.$router.push("/test");
      }
      this.generateTest();
    },
     submit() {
      if (this.selected) {
        if (this.selected == this.test.answer.text) {
          this.ammountCorrect += 1;
          this.QuestionsAsked += 1;
          if (this.QuestionsAsked == 10) {
            this.$router.push("/test");
          } else {
            this.toggleButton();
            this.generateTest();
          }
        } else {
          this.QuestionsAsked += 1;
          this.showQuestion = false;
          this.showAnswer = true;
        }
      }
    },
  },
  created() {
    this.test = {
      question: {
        text: "",
        verseNumber: 0,
        surahNumber: 0,
        audioUrl: "",
      },
      multipleChoice: [],
      answer: {
        text: "",
        verseNumber: 0,
        surahNumber: 0,
        audioUrl: "",
      },
    };
    for (let i = 1; i <= 30; i++) {
      this.volumes.push(i);
    }
  },
};
</script>

<style scoped>
div .tester {
  font-family: "hafs";
  text-align: center;
}
.question {
  font-size: 30px;
}
.button {
  color: black;
}
.button:hover {
  background-color: white;
}
audio {
  width: 100%;
}
.popover {
  width: 350px;
}
span {
  color: grey;
  font-size: 14px;
}
</style>
