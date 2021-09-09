const state = () => ({
  tab: [],
  tab_title: [
    {tab_title: "내정보" },
    {tab_title: "주문내역" },
    {tab_title: "예약내역" }
  ]
});

const getters = {
  getTab: (state) => state.tab,
  getTab_Title: (state) => state.tab_title
};

const mutations = {
  setTab: (state,value) => {state.tab = value},
};

const actions = {
  actTab: ({commit},value) => {
    commit("setTab",value);
  }
};

export default { namespaced: true, state, getters, mutations, actions };
