<template>
  <div class="home">
    <section>
      <h1 class="header">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
      <br />
      <h1>WELCOME TO QURAN TESTER</h1>
      <br />
      <br />
    </section>
    <section >
      <h2 v-show="ayah.text">
        Allah <span>(SWT)</span> says in The Holy Quran:
      </h2>

      <h2 id="popover-target-1" class="text">{{ ayah.text }}</h2>
      <b-popover target="popover-target-1" triggers="click" placement="center">
        <p class="translation">
          {{ ayah.translation }}
        </p>
        <audio v-bind:src="ayah.audioUrl" controls />
      </b-popover>
      <h3>
        Start your journey towards being a part of the preservation of the
        Quran today!
      </h3>
      <br/>
      <br />
      <!-- video section -->
      <div class="video">
        <h4>
          To deepen your connection and love for the Quran, try the simple
          practice of listening.<br/> We'll be regularly posting new videos here,
          featuring beautiful recitations for you to enjoy!
        </h4>
        <br/>
        <b-embed
          class="embed"
          type="iframe"
          aspect="16by9"
          src="https://www.youtube.com/embed/5TOJ24pQg8k?si=x1wYY7tzReK7pybG"
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
  min-height: 100vh;
  text-align: center;
  background: linear-gradient(to bottom, #7ba9e0, #d2deec, #115292);
}
.header {
  font-family: p22-v1;
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
    width: 80%;
    height: 450px;
  }
  .link {
    font-size: 14px;
  }
}
</style>