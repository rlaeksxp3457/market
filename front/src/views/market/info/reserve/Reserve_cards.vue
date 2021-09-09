<template>
  <v-container>
    <v-row
      v-for="(card,index) in cards"
      :key="index"
      class="my-1"
      justify="center"
    >
      <!-- 반복될 카드 -->
      <v-col
        align-self="center"
        cols="auto"
      >
        <v-checkbox
          v-model="checkbox"
          :value="card.menu_id"
        />
      </v-col>
      <v-col
        cols="9"
        lg="10"
        md="9"
        sm="11"
        xl="9"
      >
        <v-card
          class="pa-5"
          height="auto"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              align="center"
              class="mx-4"
              cols="12"
              lg="3"
              md="3"
              sm="4"
              xl="3"
            >
              <input
                ref="menuImageInput"
                hidden
                multiple
                type="file"
              >
              <v-avatar
                color="warning lighten-2"
                size="130"
                @click="onClickImgUpload(index)"
              >
                <v-img
                  :src="card.menu_img"
                />
              </v-avatar>
            </v-col>
            <v-col
              align="start"
              cols="12"
              lg="5"
              md="5"
              sm="4"
              xl="5"
            >
              <v-card-title
                :class="card_text"
                centered-input
              >
                <v-text-field
                  v-model="card.menu_name"
                  :disabled="isDisabled(card.menu_id)"
                  :value="card.menu_name"
                  class="centered-input"
                  dense
                  hide-details
                  label="좌석 이름"
                  outlined
                />
              </v-card-title>
              <v-card-text
                :class="card_text"
                class="text--secondary"
              >
                <v-text-field
                  v-model="card.menu_info"
                  :disabled="isDisabled(card.menu_id)"
                  :value="card.menu_info"
                  dense
                  hide-details
                  label="좌석 설명"
                  outlined
                />
              </v-card-text>
              <v-card-text
                :class="card_text"
                class="font-weight-bold"
              >
                <v-text-field
                  v-model="card.menu_price"
                  :disabled="isDisabled(card.menu_id)"
                  :value="card.menu_price"
                  class="centered-input"
                  dense
                  hide-details
                  label="좌석 가격"
                  outlined
                />
              </v-card-text>
            </v-col>
            <v-spacer />
            <v-col
              cols="12"
              lg="2"
              md="3"
              sm="3"
              xl="2"
            >
              <div
                v-if="$vuetify.breakpoint.name === 'xs'"
                class="text-center"
              >
                <v-btn
                  :disabled="isDisabled(card.menu_id)"
                  class="text-center"
                  color="error"
                  outlined
                  @click="deleteMenu"
                >
                  삭제
                </v-btn>
              </div>
              <v-card-actions
                v-else
              >
                <v-btn
                  :disabled="isDisabled(card.menu_id)"
                  class="text-center"
                  color="error"
                  outlined
                  @click="deleteMenu"
                >
                  삭제
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <reservecarddialog />
  </v-container>
</template>

<script>
export default {
  name: "Reservecard",
  components: {
    Reservecarddialog: () => import('@/views/market/info/reserve/Reserve_delete_dialog')
  },
  data: () => ({
    card_text: 'text-center text-sm-left text-md-left ',
  }),
  computed: {
    cards: {
      get() {
        return this.$store.getters["menu/getMenu"]
      },
      set(value){
        this.$store.commit("menu/setMenu",value)
      }
    },
    checkbox: {
      set(value){
        this.$store.commit("menu/setMenu_Checkbox",value)
      },
      get(){
        return this.$store.getters["menu/getMenu_Checkbox"]
      }
    },
  },
  created(){
    this.copyMenu();
  },
  methods: {
    isDisabled(value){
      const Checkbox = this.$store.getters["menu/getMenu_Checkbox"];
      return !Checkbox.includes(value)
      },
    deleteMenu(e){
      this.$store.commit("menu/setDelete",e)
    },
    copyMenu(){
      this.$store.commit("menu/copymenu")
    },
    onClickImgUpload (value) {
      this.$refs.menuImageInput[value].click();
    },
  }
  }

</script>

<style scoped>

</style>


