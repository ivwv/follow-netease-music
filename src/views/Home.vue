<template>
  <div class="home">
    <TopNav></TopNav>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from "@/components/home/TopNav.vue";
export default {
  name: "Home",
  components: {
    TopNav,
  },
};
</script>
