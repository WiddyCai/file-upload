<template>
  <div id="app">
    <h1>File Upload</h1>
    <upload />
  </div>
</template>

<script>
import upload from './components/upload.vue'

export default {
  name: 'App',
  components: {
    upload
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
