<template>
  <div id="app">
    <Navbar/>
   
<router-view>
   <Posts/>
  <Filtered/>
</router-view>



  </div>
</template>

<script>
import Posts from './components/Posts.vue'
import Navbar from './components/Navbar.vue'
import Filtered from './components/Filtered.vue'

export default {
  name: 'App',
  components: {
    Posts,
    Navbar,
    Filtered
  }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
