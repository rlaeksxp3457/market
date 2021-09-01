<template>
  <v-card>
    <v-row
      justify="space-between"
    >
      <v-col
        cols="12"
        align="center"
      >
        <v-img
          class="my-2"
          lazy-src="https://picsum.photos"
          src="https://picsum.photos/700"
          :max-height="`${Img_size}`"
          :max-width="`${Img_size}`"
        />
      </v-col>
      <v-col
        cols="6"
      >
        <v-col
          cols="12"
        >
          <div
            class="text-h3 text-left font-weight-bold mt-5 mb-2"
            :class="`text-${Font_size}`"
          >
            백종원이 인정한 연돈 <small>일식</small>
          </div>
        </v-col>
        <v-col
          cols="12"
        >
          <v-rating
            background-color="grey"
            class="mb-1"
            color="warning"
            dense
            half-increments
            length="5"
            readonly
            :size="`${Rating_size}`"
            :value="ratingStar"
          />
        </v-col>
        <v-col
          cols="12"
        >
          <div
            class="mb-3"
            :class="`text-${Font_size2}`"
          >
            경기도 김포시 00동 000-00
          </div>

          <div
            :class="`text-${Font_size2}`"
          >
            031-000-0000
          </div>
        </v-col>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "MarketTitle",
  computed: {
    ratingStar: {
      get() {
        return this.$store.getters["marketDetail/getRating"]
      }
    },
    Img_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '250'
        case 'md' : return '350'
        case 'lg' : return '400'
        case 'xl' : return '450'
        default : return '200'
      }
    },
    Rating_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return '40'
        case 'md' : return '40'
        case 'lg' : return '50'
        case 'xl' : return '60'
        default : return '20'
      }
    },
    Font_size(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return 'sm-h5'
        case 'md' : return 'md-h4'
        case 'lg' : return 'lg-h4'
        case 'xl' : return 'xl-h3'
        default : return 'subtitle-1'
      }
    },
    Font_size2(){
      switch (this.$vuetify.breakpoint.name){
        case 'sm' : return 'sm-body-2'
        case 'md' : return 'md-h6'
        case 'lg' : return 'lg-h6'
        case 'xl' : return 'xl-h5'
        default : return 'caption'
      }
    },
  }
}
</script>
