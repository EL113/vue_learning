<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
//  该组件的逻辑js对象，同vue.component("组件名"，组件逻辑js对象)，这里的name指组件名称
export default {
  name: 'App'
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
