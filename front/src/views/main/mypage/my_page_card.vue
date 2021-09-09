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
import Mypageform from "@/views/main/mypage/my_page_form";
export default {
  name: "Mypagecard",
  components: {Mypageform},
  }

</script>

<style scoped>

</style>
