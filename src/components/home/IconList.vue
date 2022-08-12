<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tubiaozhizuomoban"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-yinle"></use></svg
      ><span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use></svg
      ><span>歌单</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use></svg
      ><span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.iconList {
  width: 100%;
  height: 2rem;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .iconItem {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
}
</style>
