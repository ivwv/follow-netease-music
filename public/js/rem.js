const remSize = () => {
  // 获取到设备的宽度
  const deviceWith = document.documentElement.clientWidth || window.innerWidth
  if (deviceWith >= 750) {
    deviceWith = 750
  }
  if (deviceWith <= 320) {
    deviceWith = 320
  }
  // 750px --> 1rem=100px,375px-->1rem-50px
  document.documentElement.style.fontSize = deviceWith / 7.5 + 'px'
  // 设置字体大小
  document.querySelector('body').style.fontSize = 0.3 + 'rem'
}
// 页面创建触发
remSize()
// 当也页面大小改变时触发
window.addEventListener('resize', () => {
  remSize()
})
