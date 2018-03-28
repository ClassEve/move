<template>
  <div>
    <div class="swipe-wrapper" ref="swipeWrapper">
      <mt-swipe :auto="2000">
        <mt-swipe-item>
          <img src="./b1.jpg" ref="img">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./b2.jpg">
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="./b3.jpg">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="move-list">
      <ul>
        <li class="move-item">
          <div class="left">
            <img src="./b1.jpg" alt="" height="120" width="100">
            <div class="move-info">
              <p>名字：xxxxx</p>
              <p>主演：xxx</p>
              <p>简介：xxxxxxxxxxxxxxxxx</p>
            </div>
          </div>
          <div class="right">
            9.0
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted () {
      this.setImgWrapper()
    },
    methods: {
      // 动态设置swipe高度
      setImgWrapper () {
        let self = this
        this.$refs.img.onload = function () {
          let height = window.getComputedStyle(this).height
          self.$refs.swipeWrapper.style.height = height
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .swipe-wrapper {
    height: auto;
    img {
      width: 100%;
    }
  }

  .move-list{
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    .move-item{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

</style>
