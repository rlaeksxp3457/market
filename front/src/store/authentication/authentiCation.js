const state = () => ({
  signUp: [
    {marketSignupDialog: null},
    {memberSignupDialog: null}
  ],
  login_switch: false,
  expand: false,
  session: null
});

const getters = {
  getSignUpDialog: (state) => state.signUp,
  getLoginSwitch: (state) => state.login_switch,
  getExpand: (state) => state.expand,
  getSession: (state) => state.session
};

const mutations = {
  setSignUpDialog(state, data) {
    state.signUp = data;
  },
  setLoginSwitch(state, data) {
    state.login_switch = data;
  },
  setExpand(state, data) {
    state.expand = data;
  },
  setSession(state, data) {
    state.session = data;
  }
};

const actions = {
  actSession({ commit }, v) {

    commit("setSession");
  }
};

export default { namespaced: true, state, getters, mutations, actions };
