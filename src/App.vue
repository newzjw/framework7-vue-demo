<template>
  <f7-app :params="params">
    <!-- Statusbar -->
    <!-- <f7-statusbar></f7-statusbar> -->
    <f7-view url="/tabs/" main :stackPages="true"></f7-view>
  </f7-app>
</template>

<script>
import routes from './router/index';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      params: {
        name: 'Framework7-vue',
        id: 'DemoApp',
        theme: 'ios',  
        routes: routes,
      }
    }
  },
  components: {
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
  margin-top: 60px;
}
</style>
