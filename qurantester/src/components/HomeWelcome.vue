<template>
  <div class="home">
    <section class="header">
      <h1 class="header">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
      <br />
      <h2 v-show="ayah.text">
        Allah <span>(SWT)</span> Says In The Holy Quran:
      </h2>

      <h2 id="popover-target-1" class="text">{{ ayah.text }}</h2>
      <b-popover target="popover-target-1" triggers="click" placement="center">
        <p class="translation">
          Indeed, it is We who sent down the Qur'an and indeed, We will be its
          guardian
        </p>
        <audio v-bind:src="ayah.audioUrl" controls />
      </b-popover>
      <h3 class="header">
        Start your journey towards being a part of the preservation of the
        <b>Quran</b> Today!
      </h3>
    </section>
    <section>
      <h1>Welcome To Quran Tester:</h1>
      <ul>
        <li>
          <router-link to="/about" class="link">
            <h1>About Quran Tester</h1></router-link
          >
        </li>
        <li>
          <router-link to="/test" class="link">
            <h1>Start Testing Your Memorization</h1>
          </router-link>
        </li>
        <li>
          <router-link to="/resources" class="link">
            <h1>Resources</h1>
          </router-link>
        </li>
      </ul>
      <div class="video">
        <h3>
          One of the best ways To strengthen your connection and love with the
          Quran is to Listen, Every couple of days We'll put a new video here
          with Beautiful recitation for you to enjoy!
        </h3>
        <b-embed
          class="embed"
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/d96J2KNMm0w?si=P4pDWJAf0duB8pcT"
          allowfullscreen
        ></b-embed>
      </div>
    </section>
  </div>
</template>

<script>
import apiService from "@/services/apiService";
export default {
  data() {
    return {
      ayah: {},
    };
  },
  methods: {
    getAyah() {
      apiService.getVerse(15, 9).then((response) => {
        this.ayah = response.data;
      });
    },
  },
  created() {
    this.getAyah();
  },
};
</script>

<style scoped>
.home {
  background: linear-gradient(to bottom, #0050B3, #87CEFA);
}
.header {
  font-family: p22-v1;
  text-align: center;
}
ul {
  list-style-type: none;
}
li {
  margin-bottom: 50px;
}
span {
  color: grey;
  font-size: 15px;
}
.translation {
  color: grey;
}
audio {
  width: 100%;
}
.text {
  font-family: "hafs";
}
.video {
  text-align: center;
}
.embed {
  width: 560px;
  height: 315px;
}
.link {
  color: rgb(9, 9, 9);
}
.link:hover {
  color: white;
}
@media (max-width: 768px) {
  .embed {
    width: 100%;
    height: auto;
  }
  .link {
    font-size: 14px;
  }
}
</style>
