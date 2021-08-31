<template>
  <v-card>
    <v-row class="py-5">
      <v-col>
        <div class="text-h5 mb-5">
          치킨러버
        </div>
        <div class="text-subtitle-1">
          경기도 김포시 장기동 000-000
        </div>
        <div class="text-subtitle-1">
          010-0000-0000
        </div>
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="py-5">
      <v-col xl="12">
        <div class="text-h5">
          주문 상세 요청
        </div>
      </v-col>
      <v-col xl="10">
        <v-text-field
          label="주문 상세 요청 기입"
          hint="소스 많이 부어주세요, 6시 전까지 배달해주세요"
          persistent-hint
          outlined
        />
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="py-5">
      <v-col xl="12">
        <div class="text-h5">
          장바구니 메뉴
        </div>
      </v-col>
      <v-col>
        <v-card
          height="160px"
          outlined
          flat
        >
          <v-row
            align="center"
            justify="start"
          >
            <v-col
              class="mx-4"
              xl="2"
            >
              <v-avatar
                color="primary lighten-2"
                size="130"
                tile
              />
            </v-col>
            <v-col
              cols="8"
            >
              <v-card-title>허니콤보</v-card-title>
              <v-card-text class="text-left text--secondary">
                메뉴 설명
              </v-card-text>
              <v-card-text class="text-left font-weight-bold price">
                9,900원
              </v-card-text>
            </v-col>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="indigo"
                outlined
                disabled
                width="1em"
              >
                -
              </v-btn>
              <span class="mx-5">1</span>
              <v-btn
                color="indigo"
                outlined
              >
                +
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col xl="1">
        <v-btn
          color="grey"
          depressed
          @click="floating.orderDialog = false"
        >
          취소하기
        </v-btn>
      </v-col>
      <v-col xl="1">
        <v-btn
          color="primary"
          depressed
        >
          결제하기
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "OrderCard",
  computed: {
    floating: {
      get() {
        return this.$store.getters["marketDetail/getFloating"]
      }
    }
  }
}
</script>