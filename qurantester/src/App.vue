<template>
  <div >
    <page-header/>
    <router-view/>
    <Analytics/>
  </div>
</template>
<script>
import PageHeader from './components/PageHeader.vue';
import {Analytics} from '@vercel/analytics'
export default {
  components: { PageHeader , Analytics},
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
  background-color: rgb(0, 0, 199);
}


</style>
