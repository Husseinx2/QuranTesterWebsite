<template>
  <div >
    <page-header/>
    <router-view/>
  </div>
</template>
<script>
import PageHeader from './components/PageHeader.vue';
import {inject} from '@vercel/analytics'
export default {
  components: { PageHeader },
   data() {
     return {
        choice: {}
     }
   },
    created(){
      this.$store.commit("GET_CHAPTERS");
      inject();
    }
  
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: rgb(0, 0, 199);
}


</style>
