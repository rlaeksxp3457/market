<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-card
        elevation="5"
        rounded="lg"
      >
        <div class="text-h4 text-center py-5 my-5">
          내 정보
        </div>
        <div>
          <mypageform />
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Mypagecard",
  components: {
    Mypageform: () => import('@/views/market/mypage/my_page_info')
  },
  }

</script>

<style scoped>

</style>
