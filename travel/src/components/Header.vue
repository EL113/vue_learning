<template>
  <router-link to="/city">
    <div style="font-size:30px">
      {{msg}}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'this is header'
    }
  }
}
</script>

<style scoped>
</style>
