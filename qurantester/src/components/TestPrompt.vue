<template>
  <div class="home">
       <button v-on:click="toggleTest" v-show="!chapterTest">Test by Chapter </button>
       <button v-on:click="toggleTest" v-show="chapterTest">Test by Volume</button>
    <div class="chapter" v-show="chapterTest">
      <h1>Select Surah to be tested on</h1>
      <select v-model="choice">
        <option
          v-for="chapter in $store.state.chapters"
          v-bind:key="chapter.number"
          v-bind:value="chapter.number"
        >
          {{ chapter.englishName }} | {{ chapter.name }}
        </option>
      </select>
      <br />
      <br />
      <button v-on:click="GenerateTest">Generate Test</button>
    </div>

    <div class="volume" v-show="!chapterTest">
      <h1>Select Volume to be tested on</h1>
      <select  v-model="choice">
        <option
          v-for="number in volumeNumber"
          v-bind:key="number"
          v-bind:value="number"
        >
          {{number}}
        </option>
      </select>
      <br />
      <br />
      <button v-on:click="GenerateTest">Generate Test</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestPrompt",
  components: {},
  data() {
    return {
      choice: null,
      chapterTest: true,
    };
  },

  methods: {
    GenerateTest() {
      if (this.choice) {
        this.$store.commit("GENERATE_TEST", this.choice);
        this.test = this.$store.state.test;
      }
    },
    toggleTest(){
      if (this.chapterTest) {
        this.chapterTest = false;
      }
      else{
        this.chapterTest = true;
      }
    }
  },
  computed: {
   volumeNumber(){
     let volumeNumbers = [];
     for(let i = 1; i<=30; i++) {
       volumeNumbers.push(i);
     }
     return volumeNumbers;
   }
  }
};
</script>
