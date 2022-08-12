<template>
  <ItemMusicTop :playlist="state.playlist"></ItemMusicTop>
  <!-- <ItemMusicTop></ItemMusicTop> -->
  <ItemMusicList :playlist="state.playlist"></ItemMusicList>
</template>

<script setup>
import { useRoute } from 'vue-router'
import _ from 'lodash'
import { useStore } from 'vuex'
import { onMounted, inject, reactive } from 'vue'
import ItemMusicTop from '@/components/item/ItemMusicTop.vue'
import ItemMusicList from '@/components/item/ItemMusicList.vue'
const $http = inject('$http')
const store = useStore()
const state = reactive({
  beforePlaylist: {},
  playlist: {},
})
onMounted(async () => {
  const id = useRoute().query.id
  const { data: res } = await $http.get('/playlist/detail', {
    params: {
      id,
    },
  })

  state.playlist = {
    id: res.playlist.id,
    coverImgUrl: res.playlist.coverImgUrl,
    name: res.playlist.name,
    playCount: res.playlist.playCount,
    description: res.playlist.description,
    shareCount: res.playlist.shareCount,
    commentCount: res.playlist.commentCount,
    avatarUrl: res.playlist.creator.avatarUrl,
    nickname: res.playlist.creator.nickname,
    signature: res.playlist.creator.signature,
  }
  // await store.dispatch('changePlayList', res.playlist)
  // console.log(res)
  // state.playlist = res.playlist
  // console.log(state.playlist)

  // console.log(.state.playlist)
  // 调用mutation将 res.palylist 存储到 store.state.playlist
  // store.commit('changePlayList', res.palylist)
})
</script>

<style></style>
