<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { reactive, inject, onMounted } from 'vue'

const $http = inject('$http')
const state = reactive({
  images: [],
})
onMounted(async () => {
  const { data: res } = await $http.get('/banner', {
    params: {
      type: 2,
    },
  })
  console.log(res)
  state.images = res.banners
})
</script>

<style lang="less" scoped>
#swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
      .van-swipe__indicator--active {
        background-color: rgb(219, 130, 130);
      }
    }
  }
}
</style>
