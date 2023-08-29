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
           {{ayah.translation}} 
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
        <h4>
          One of the best ways to strengthen your connection and love with the
          Quran is to Listen. Every couple of days we'll put a new video here
          with beautiful recitation for you to enjoy!
        </h4>
        <b-embed
          class="embed"
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/9wy9G3y23qw?si=pq3mit8g-CeHCKkj"
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
  background: linear-gradient(to bottom, #7ba9e0, #d2deec, #115292);
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
