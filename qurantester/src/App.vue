<template>
  <div id="app">
    <page-header/>
    <router-view/>
  </div>
</template>
<script>
import PageHeader from './components/PageHeader.vue';

export default {
  components: { PageHeader },
   data() {
     return {
        choice: {}
     }
   },
   created(){
      this.$store.commit("GET_CHAPTERS");
   }
  
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav {
  padding: 30px;
}
</style>
