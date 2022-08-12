<template>
  <div></div>
</template>

<script setup>
import { defineProps, inject, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const props = defineProps(['playlist'])
// console.log(props.playlist.id)
const $http = inject('$http')
const state = reactive()

onMounted(async () => {
  const { data: res } = await $http.get('/playlist/track/all', {
    params: {
      id: useRoute().query.id,
      limit: 10,
      offset: 1,
    },
  })
  console.log(res)
})
</script>

<style lang="less" scoped></style>
