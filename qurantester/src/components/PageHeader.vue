<template>
  <header>
    <div class="container">
      <router-link to="/"> 
      <img src="../../public/Logo.png" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-image: linear-gradient(to left, #4b6cb7, #182848);
  color: white;
  font-size: 30px;
  padding: 20px;
}

.nav {
  position: relative;
  left: 200px;
}
img {
  height: 100px;
  position: relative;
}
.black {
  color: black;
}

</style>