const state = () => ({
  tab: [],
  tab_title: [
    {tab_title: "내정보" },
    {tab_title: "주문내역" },
    {tab_title: "예약내역" }
  ],
  floating:{
    order_floationg : false,
    reserve_floationg : false
  }

});

const getters = {
  getTab: (state) => state.tab,
  getTab_Title: (state) => state.tab_title,
  getFloating:(state) => state.floating
};

const mutations = {
  setTab: (state,value) => {state.tab = value},
  setOrderDialog: (state) => {
      state.floating.order_floationg = !state.floating.order_floationg
  },
  setReserveDialog: (state) => {
    state.floating.reserve_floationg = !state.floating.reserve_floationg
  },
};

const actions = {
  actOrderDialog: ({commit}) => {
    commit("setOrderDialog");
  },
  actReserveDialog: ({commit}) => {
    commit("setReserveDialog");
  },
  actTab: ({commit},value) => {
    commit("setTab",value);
  }
};

export default { namespaced: true, state, getters, mutations, actions };
