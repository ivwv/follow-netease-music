import { createStore } from 'vuex'

export default createStore({
  state: {
    //播放列表
    playList: [
      {
        id: 1963487880,
        al: {
          id: 148003472,
          name: '沈阳路',
          pic: 109951167662536180,
          picUrl:
            'https://p1.music.126.net/cCgZB-HXoDKE7HhwmNeCbA==/109951167662536181.jpg',
          pic_str: '109951167662536181',
        },
      },
    ],
    playListIndex: 0, // 默认下标为 0
  },
  getters: {},
  mutations: {
    mutationTest(state) {
      console.log('ceshi')
    },
  },
  actions: {},
  modules: {},
})
