<template>
  <ItemMusicTop :playlist="state.playlist"></ItemMusicTop>
  <!-- <ItemMusicTop></ItemMusicTop> -->
</template>

<script setup>
import { useRoute } from 'vue-router'

import { useStore } from 'vuex'
import { onMounted, inject, reactive } from 'vue'
import ItemMusicTop from '@/components/item/ItemMusicTop.vue'
const $http = inject('$http')
const store = useStore()
const state = reactive({
  playlist: {},
})
onMounted(async () => {
  const id = useRoute().query.id
  const { data: res } = await $http.get('/playlist/detail', {
    params: {
      id,
    },
  })
  state.playlist = res.playlist
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
