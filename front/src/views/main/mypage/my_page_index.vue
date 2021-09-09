<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-card
        rounded="lg"
        elevation="5"
      >
        <MyPageTabItems />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import MyPageTabItems from "@/views/main/mypage/my_page_tab_items";
export default {
  name: "Mypageindex",
  components: {MyPageTabItems}
}
</script>

<style scoped>

</style>
