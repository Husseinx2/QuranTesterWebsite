<template>
  <div>
    <section>
      <h1 class="header">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
      <h2>Allah <span>(SWT)</span> Says In The Holy Quran:</h2>

      <h2 id="popover-target-1" class="text">{{ ayah.text }}</h2>
      <b-popover target="popover-target-1" triggers="hover" placement="right">
        <p class="translation">
          Indeed, it is We who sent down the Qur'an and indeed, We will be its
          guardian
        </p>
        <audio v-bind:src="ayah.audioUrl" controls />
      </b-popover>
      <h1 class="header">
        Start your journey towards being a part of the preservation of the
        <b>Quran</b> Today!
      </h1>
    </section>
    <section>
      <h1>Welcome To Quran Tester</h1>
      <ul>
        <li>
          <router-link to="/about"> <h1>About Quran Tester</h1></router-link>
        </li>
        <li>
          <router-link to="/test">
            <h1>Start Testing Your Memorization</h1>
          </router-link>
        </li>
        <li>
          <router-link to="/about"> <h1>Review</h1> </router-link>
        </li>
        <li>
          <router-link to="/about"> <h1>Resources</h1> </router-link>
        </li>
      </ul>
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

.header {
  font-family: p22-v1;
  text-align: center;
}
ul {
  display: grid;
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
  font-family: "hafs"

}

</style>