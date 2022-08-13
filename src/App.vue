<template>
  <router-view />
  <FooterMusic></FooterMusic>
</template>
<script setup>
import FooterMusic from '@/components/item/FooterMusi.vue'
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
}
a {
  color: black;
}
</style>
