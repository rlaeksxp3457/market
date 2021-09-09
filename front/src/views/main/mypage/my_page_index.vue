<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-card
        elevation="5"
        rounded="lg"
      >
        <MyPageTabItems />
      </v-card>
    </v-col>
    <my-page-order-dialog />
    <MyPageReserveDialog />
  </v-row>
</template>

<script>
export default {
  name: "Mypageindex",
  components: {
    MyPageReserveDialog: () => import('@/views/main/mypage/reserve/my_page_reserve_dialog'),
    MyPageOrderDialog: () => import('@/views/main/mypage/order/my_page_order_dialog'),
    MyPageTabItems: () => import('@/views/main/mypage/my_page_tab_items')
  }
}
</script>

<style scoped>

</style>
