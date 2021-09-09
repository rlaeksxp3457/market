<template>
  <v-tab-item>
    <v-container>
      <v-row
        class="my-1"
        justify="center"
      >
        <v-col
          v-for="card in 5"
          :key="card"
          sm="12"
          md="10"
          lg="10"
          xl="10"
        >
          <!-- 반복될 카드 -->
          <v-card
            class="pa-5"
            height="auto"
            rounded="lg"
          >
            <v-row
              align="center"
              justify="center"
            >
              <v-col
                align="center"
                class="mx-10"
                xl="1"
              >
                <v-avatar
                  color="warning lighten-2"
                  size="80"
                  tile
                />
              </v-col>
              <v-col
                align="start"
              >
                <v-card-text
                  :class="card_text"
                  class="text--secondary"
                >
                  교촌 치킨
                </v-card-text>
                <v-card-text
                  :class="card_text"
                  class="font-weight-bold"
                >
                  허니콤보 1개 9,900원
                </v-card-text>
                <v-card-text
                  :class="card_text"
                  class="font-weight-bold"
                >
                  00/00(월) 상품 준비중
                </v-card-text>
              </v-col>
              <v-spacer />
              <v-spacer />
              <v-col>
                <v-btn
                  color="primary"
                  dark
                  outlined
                  right
                  @click="setReserveDialog"
                >
                  리뷰작성
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-tab-item>
</template>

<script>
export default {
  name: "MyPageReserveCard",
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left pa-1'
  }),
  methods: {
    setReserveDialog(){
      this.$store.dispatch("mypage/actReserveDialog")
    }
  }
}
</script>

<style scoped>

</style>
