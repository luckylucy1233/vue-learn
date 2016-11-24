<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <!--<tree></tree>-->
    <transition name='fade' mode='out-in'>
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Hello from './components/Hello'
// import tree from './components/tree/tree.vue'
export default {
  // name: 'app',
  components: {
    Hello,
    // tree
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
