const state = {
  token: '',
  userInfo: {}
};

const getters = {
  token: (state: any) => state.token,
  userInfo: (state: any) => state.userInfo
};

const mutations = {
  setToken(state: any, token: string) {
    state.token = token;
  },
  setUserInfo(state: any, userInfo: string) {
    state.userInfo = userInfo;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
