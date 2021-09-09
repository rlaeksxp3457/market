<template>
  <v-tabs-items v-model="tab">
    <Mypagecard />
    <MyPageOrderCard />
  </v-tabs-items>
</template>

<script>
import Mypagecard from "@/views/main/mypage/my_page_card";
import MyPageOrderCard from "@/views/main/mypage/my_page_order_card";
export default {
  name: "MyPageTabItems",
  components: {MyPageOrderCard, Mypagecard},
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
