<template>
  <div class="itemMusicTop">
    <img :src="props.playlist.coverImgUrl" alt="" class="bgImg" />
    <div class="itemLeft">
      <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
        <use xlink:href="#icon-xitongfanhui"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="itemRight">
      <svg class="icon" aria-hidden="true" @click="logPlayList">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      <svg class="icon list" aria-hidden="true">
        <use xlink:href="#icon-list"></use>
      </svg>
    </div>
  </div>
  <div class="banner-center">
    <div class="imgLeft"><img :src="props.playlist.coverImgUrl" alt="" /></div>
    <div class="contentRight">
      <div class="title">
        旋律控，踩点，耳熟能详的你绝对听过的那些英文流行歌曲。感谢收藏评论分享。
      </div>
      <div class="creator">
        <div class="user">
          <!-- <img :src="props.playlist.creator.avatarUrl" alt="" /> -->
          <span>{{ props.playlist.coverImgUrl }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const props = defineProps(['playlist'])
const logPlayList = () => {
  console.log(props.playlist)
}
</script>

<style lang="less" scoped>
.banner-center {
  width: 100%;
  margin-top: 30px;

  .imgLeft {
    float: left;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.2rem;
    margin-right: 0.2rem;
    overflow: hidden;
    margin-left: 0.2rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .contentRight {
    float: left;
    width: 4.5rem;
    height: 2.5rem;
    border: 1px solid #ccc;
    .title {
      width: 100%;
      height: 0.8rem;
      background-color: pink;
      // 文字溢出 显示 ...
      overflow: hidden;
      text-overflow: ellipsis;
      // 强制换行
    }
  }
}
.itemMusicTop {
  position: relative;
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0.2rem;

  .itemLeft,
  .itemRight {
    float: left;
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
    span {
      font-size: 0.4rem;
      color: #fff;
    }
    .icon {
      fill: #fff;
    }
  }

  .bgImg {
    width: 100%;
    height: 11rem;
    position: fixed;
    z-index: -1;
    // css3虚化
    filter: blur(30px);
  }
}
</style>
