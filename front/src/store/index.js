import Vue from "vue";
import Vuex from "vuex";
import drawer from "@/store/market/drawer";
import tab from "@/store/main/tab";
import items from "@/store/main/tabItems";
import order from "@/store/market/Order";
import reservation from "@/store/market/Reservation";
import info from "@/store/market/Info";
import market_modules from "@/store/market/Market_modules";
import market_list from "@/store/main/marketlist";
import market_detail from "@/store/main/marketdetail";
import DashBoard from "@/store/market/DashBoard";
import menu from "@/store/market/menu";
import marketSignup from "@/store/signup/market";
import memberSignup from "@/store/signup/member";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...drawer,
    ...order,
    ...reservation,
    ...tab,
    ...items,
    ...market_modules,
    ...info,
    ...market_list,
    ...market_detail,
    ...DashBoard,
    ...menu,
    ...marketSignup,
    ...memberSignup,
  },
});

export default store;
