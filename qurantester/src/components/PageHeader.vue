<template>
  <div>
    <b-navbar class="header" toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand href="/">
        <img src="../../public/Logo.png" alt="logo" />
        <b style="color: black">Quran</b>Tester
      </b-navbar-brand>
       <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/test">Test</b-nav-item>
        <b-nav-item to="/resources" >Resources</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  height: 100px;
}
</style>
