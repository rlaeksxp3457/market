<template>
  <v-tabs-items v-model="tab">
    <Mypagecard />
    <MyPageOrderCard />
    <MyPageReserveCard />
  </v-tabs-items>
</template>

<script>
export default {
  name: "MyPageTabItems",
  components: {
    MyPageReserveCard: () => import('@/views/main/mypage/reserve/my_page_reserve_card'),
    MyPageOrderCard: () => import('@/views/main/mypage/order/my_page_order_card'),
    Mypagecard: () => import('@/views/main/mypage/info/my_page_card')
  },
  computed: {
    tab:{
      get(){
        return this.$store.getters["mypage/getTab"]
      }
    }
  }
}
</script>

<style scoped>

</style>
