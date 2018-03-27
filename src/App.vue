<template>
  <div id="app">
    <router-view/>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">
        <img slot="icon" src="./assets/logo.png">
        推荐
      </mt-tab-item>
      <mt-tab-item id="2">
        <img slot="icon" src="./assets/logo.png">
        个人中心
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        selected: '1'
      }
    },
    watch: {
      selected(newVal, oldVal) {
        if (newVal === '1') {
          this.$router.push('/recommend')
        } else {
          this.$router.push('/my')
        }
      }
    }
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

  .mint-tabbar > .mint-tab-item.is-selected {
    background: #fafafa;
  }
</style>
