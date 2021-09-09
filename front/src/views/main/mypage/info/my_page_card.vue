<template>
  <v-tab-item>
    <div class="text-h4 text-center py-5 my-5">
      내 정보
    </div>
    <div>
      <mypageform />
    </div>
  </v-tab-item>
</template>

<script>
export default {
  name: "Mypagecard",
  components: {
    Mypageform: () => import('@/views/main/mypage/info/my_page_info')
  },
  }

</script>

<style scoped>

</style>
