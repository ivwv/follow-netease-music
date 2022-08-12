<template>
  <div class="home">
    <!-- 头部 -->
    <TopNav></TopNav>
    <!-- 轮播图 -->
    <SwiperTop></SwiperTop>
    <IconList></IconList>
    <MusicList></MusicList>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/home/TopNav.vue'
import SwiperTop from '@/components/home/SwiperTop'
import IconList from '@/components/home/IconList'
import MusicList from '@/components/home/MusicList'

export default {
  name: 'Home',
}
</script>
