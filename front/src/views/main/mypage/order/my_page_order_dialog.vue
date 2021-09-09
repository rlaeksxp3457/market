<template>
  <v-dialog
    v-model="getFloating.order_floationg"
    fullscreen
    transition="dialog-bottom-transition"
  >
    <mypageorderdialogcard />
  </v-dialog>
</template>

<script>
export default {
  name: "MyPageOrderDialog",
  components: {
    Mypageorderdialogcard: () => import('@/views/main/mypage/order/my_page_order_dialog_card')
  },
  computed: {
    getFloating() {
      return this.$store.getters["mypage/getFloating"]
    }
  }
}
</script>

<style scoped>
</style>
