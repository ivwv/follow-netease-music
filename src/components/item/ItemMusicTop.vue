<template>
  <div class="itemMusicTop">
    <img :src="props.playlist.coverImgUrl" alt="" class="bgImg" />
    <span class="playCount"
      ><svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-play"></use>
      </svg>
      {{ changeCount(props.playlist.playCount) }}</span
    >

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
        {{ props.playlist.description }}
      </div>
      <div class="creator">
        <div class="user">
          <img :src="props.playlist.avatarUrl" alt="" />
          <span
            >{{ props.playlist.nickname }}
            <svg class="icon xiangyoujiantou" aria-hidden="true">
              <use xlink:href="#icon-xiangyoujiantou"></use></svg
          ></span>
        </div>
        <div class="description">
          {{ props.playlist.signature }}
        </div>
      </div>
    </div>
  </div>
  <div class="fourBtn-container">
    <div class="top-btn btn-comment">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiaoxi"></use>
      </svg>
      <span>{{ props.playlist.commentCount }}</span>
    </div>
    <div class="top-btn btn-share">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
      <span>{{ props.playlist.shareCount }}</span>
    </div>
    <div class="top-btn btn-download">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-icon_xiazai"></use>
      </svg>
      <span>下载</span>
    </div>
    <div class="top-btn btn-checkbox">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xuanze-duoxuan-tianchong"></use>
      </svg>
      <span>多选</span>
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
const changeCount = (num) => {
  if (num >= 100000000) {
    return (num / 100000000).toFixed(1) + '亿'
  } else if (num >= 10000) {
    return (num / 10000).toFixed(1) + '万'
  }
}
</script>

<style lang="less" scoped>
.fourBtn-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.1rem 0.2rem;
  color: #fff;
  .top-btn {
    margin-top: 20px;
    .icon {
      display: block;
      width: 0.8rem;
      margin-bottom: 7px;
      text-align: center;
      margin-left: -4px;
      fill: #fff;
    }
  }
}
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
    //border: 1px solid #ccc;
    .title {
      width: 100%;
      height: 0.8rem;
      color: #fff;
      font-weight: 900;
      //background-color: pink;
      // 文字溢出 显示 ...
      overflow: hidden;
      text-overflow: ellipsis;
      // 强制换行
    }
    .creator {
      width: 100%;
      height: 0.8rem;
      //background-color: blue;
      margin-top: 10px;
      .user {
        vertical-align: middle;
        img {
          width: 0.7rem;
          height: 0.7rem;
          border-radius: 0.35rem;
          // 基准线
          vertical-align: middle;
          margin-right: 10px;
        }
        span {
          color: #fff;
        }
        span .xiangyoujiantou {
          width: 0.3rem;
          height: 0.3rem;
          border-radius: 0.35rem;
          // 基准线
          vertical-align: middle;
          margin-right: 10px;
        }
      }
      .description {
        width: 100%;
        height: 0.8rem;
        color: rgb(226, 221, 221);
        overflow: hidden;
        margin-top: 2px;
      }
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
  .playCount {
    position: absolute;
    vertical-align: middle;
    top: 1.7rem;
    left: 1.06rem;
    color: #fff;

    font-size: 11px;
    .icon {
      // 设置svg颜色
      fill: #fff;
      vertical-align: middle;
      width: 20px;
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
