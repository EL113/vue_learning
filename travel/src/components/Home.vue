<template>
  <div>
    <Header></Header>
    <div>this is body:{{msg}}</div>
  </div>
</template>

<script>
//  在组件中引入其他组件，并注册到当前组件中，子组件在页面上记得同名，是区分大小写的，除了短横线
import Header from './Header'

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header
  }
}
</script>

<style scoped>
</style>
