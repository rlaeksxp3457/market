<template>
  <v-card
    flat
  >
    <v-toolbar
      color="white"
    >
      <v-toolbar-title>리뷰 작성</v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="setFloating"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row
      justify="center"
      class="mt-5"
    >
      <v-col
        align="center"
        cols="10"
        xl="10"
        lg="10"
        md="10"
        sm="10"
      >
        <div
          :class="`text-${Font_Size}`"
        >
          교촌치킨 압구정점
        </div>
      </v-col>
      <v-col
        align="center"
        cols="6"
      >
        <v-rating
          :size="`${Rating_size}`"
          background-color="grey"
          color="warning"
          dense
          half-increments
          length="5"
          value="3"
        />
      </v-col>
      <v-col
        cols="10"
        lg="10"
        md="10"
        sm="10"
        xl="10"
      >
        <v-textarea
          auto-grow
          class="p"
          outlined
          placeholder="최소 15자 이상의 정성이 담긴 리뷰를 작성해세요."
          rounded
          row-height="20"
          rows="10"
        />
      </v-col>
    </v-row>
    <v-row
      dense
      justify="left"
    >
      <v-col
        cols="auto"
        lg="auto"
        md="auto"
        offset="1"
        sm="auto"
      >
        <input
          ref="imageInput"
          hidden
          multiple
          type="file"
          @change="onChangeImages"
        >
        <v-btn
          :height="`${Button_Img_size}`"
          :width="`${Button_Img_size}`"
          color="primary"
          outlined
          rounded
          type="button"
          @click="onClickImgUpload"
        >
          <v-icon center>
            mdi-camera
          </v-icon>
        </v-btn>
      </v-col>
      <v-col
        cols="auto"
        lg="auto"
        md="auto"
        sm="auto"
      >
        <v-img
          :height="`${Button_Img_size}`"
          :width="`${Button_Img_size}`"
          class="white--text align-end rounded-xl"
          src="https://picsum.photos/80"
        />
      </v-col>
    </v-row>
    <v-row
      justify="end"
    >
      <v-col
        cols="auto"
        lg="auto"
        md="auto"
        sm="auto"
      >
        <v-btn
          color="primary"
          depressed
        >
          리뷰 완료
        </v-btn>
      </v-col>
      <v-col cols="1" />
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "Mypageorderdialogcard",
  computed: {
      getFloating() {
        return this.$store.getters["mypage/getFloating"]
      },
    Font_Size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'sm':
          return 'sm-h4'
        case 'md':
          return 'md-h4'
        case 'lg':
          return 'lg-h4'
        case 'xl':
          return 'xl-h4'
        default :
          return {}
      }
    },
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '35'
        case 'md' : return '50'
        case 'lg' : return '60'
        case 'xl' : return '65'
        default : return '20'
      }
    },
    Button_Img_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '74'
        case 'md' : return '80'
        case 'lg' : return '90'
        case 'xl' : return '95'
        default : return '70'
      }
    }
  },
  methods: {
    onClickImgUpload () {
      this.$refs.imageInput.click();
    },
    setFloating(){
      this.$store.dispatch("mypage/actOrderDialog")
    },
    onChangeImages (e) {
      console.log(e.target.files);
      const imgFormData = new FormData();
      [].forEach.call(e.target.files, (f) => {
        imgFormData.append('img', f);
      });
    }
  },
}
</script>

<style scoped>

</style>
