<template>
  <v-container>
    <v-app-bar
      app
      color="white"
    >
      <v-toolbar-title>
        <router-link to="/">
          <v-img
            :src="require('@/assets/logo.png')"
            contain
            max-height="30"
            max-width="165"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="expand = !expand"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-expand-x-transition>
        <v-card
          v-show="expand"
          class="pa-2"
          color="transparent"
          elevation="0"
          width="600px"
        >
          <v-text-field
            clearable
            dense
            filled
            hide-details
            rounded
          />
        </v-card>
      </v-expand-x-transition>
      <v-btn
        icon
        to="/login"
      >
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
      <router-link to="/mypage">
        <v-avatar
          class="mx-2"
        >
          <img
            alt="John"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          >
        </v-avatar>
      </router-link>
      <template
        v-if="$route.name === 'Main'"
        #extension
      >
        <main-tab-bar />
      </template>
      <template
        v-else-if="$route.name === 'mypage'"
        #extension
      >
        <mypagetab />
      </template>
    </v-app-bar>
  </v-container>
</template>
<script>
export default {
  name: "MainAppBar",
  components: {
    Mypagetab: () => import('@/views/main/mypage/my_page_tab'),
    MainTabBar: () => import('@/layouts/main/Tab')
  },
  data: () => ({
    expand: false,
  }),

}
</script>

<style scoped>

</style>
