<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="130"
        :show-indicators="false"
        class="my-swiper"
      >
        <van-swipe-item
          v-for="item in state.musicList"
          :key="item.id"
          class="swiper-item"
        >
          <router-link :to="{ path: '/itemMusic', query: { id: item.id } }">
            <img :src="item.picUrl" alt="" />
            <span class="playCount"
              ><svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-play"></use>
              </svg>
              {{ changeCount(item.playCount) }}</span
            >
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
// 按需导入
import { inject, reactive, onMounted } from 'vue'

// 使用inject注册全局挂载的 $http
const $http = inject('$http')
// 定义存储
const state = reactive({
  musicList: [],
})
onMounted(async () => {
  await getData()
})
const changeCount = (num) => {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿'
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万'
  }
}
const getData = async () => {
  const { data: res } = await $http.get('/personalized', {
    params: {
      limit: 10,
    },
  })
  // console.log(res)
  state.musicList = res.result
  console.log(state.musicList)
}
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2em;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 200px;
    .my-swiper {
      height: 100%;

      img {
        width: 100%;
        height: 120px;
        border-radius: 15px;
      }
      .swiper-item {
        height: 100%;
        width: 230px;
        padding: 0 6px;
        overflow: hidden;
        position: relative;

        .playCount {
          position: absolute;
          vertical-align: middle;
          top: 0;
          right: 7px;
          color: #fff;

          font-size: 11px;
          .icon {
            // 设置svg颜色
            fill: #fff;
            vertical-align: middle;
            width: 20px;
          }
        }
      }
    }
  }
}
</style>
