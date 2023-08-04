<template>
  <div>
    <section>
      <h1 class="header">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h1>
    </section>
    <section>
      <h1>Welcome To Quran Tester</h1>
      <ul>
        <li>
          <router-link to="/about"> <h1>About Quran Tester</h1></router-link>
        </li>
        <li>
          <router-link to="/about"
            > <h1>Start Testing Your Memorization</h1>
          </router-link>
        </li>
         <li>
          <router-link to="/about"
            > <h1>Review </h1>
          </router-link>
        </li>
         <li>
          <router-link to="/about"
            > <h1>Resources</h1>
          </router-link>
        </li>
        
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  text-align: center;
  font-size: 30px;
}
ul {
  display: grid;
}
</style>