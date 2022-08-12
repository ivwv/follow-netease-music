import { createStore } from 'vuex'

export default createStore({
  state: {
    playlist: {},
    nameawa: `zhangsan`,
  },
  getters: {},
  mutations: {
    changePlayList(state, data) {
      console.log('调用了')
      state.playlist = data
    },
  },
  actions: {
    async changePlayList(context, data) {
      console.log('调用了')
      await context.commit('changePlayList', data)
    },
  },
  modules: {},
})
