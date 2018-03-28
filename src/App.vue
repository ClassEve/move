<template>
  <div id="app" :class="{'pt': pt}">
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
    data () {
      return {
        selected: '1'
      }
    },
    computed: {
      pt () {
        if (/index/.test(this.$route.path) !== -1) {
          return true
        } else {
          return false
        }
      }
    },
    watch: {
      selected (newVal, oldVal) {
        if (newVal === '1') {
          this.$router.push('/indexRecommend')
        } else {
          this.$router.push('/indexMy')
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "./common/sass/index.scss";

  .mint-tabbar{
    position: fixed;
    z-index:10000;
  }
  .mint-tabbar > .mint-tab-item.is-selected {
    background: #fafafa;
  }

  .pt {
    padding-bottom: 55px;
  }
</style>
