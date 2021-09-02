<template>
  <v-container>
    <!--  상단 dropdown  -->
    <option-select />

    <v-divider />
    <!-- 하단 패널  -->
    <option-panel />

    <option-button />
  </v-container>
</template>
<script>
  export default {
    name: "OptionTabItems",
    components: {
      OptionButton:() => import ("@/views/market/menu/option/OptionButton"),
      OptionPanel: () => import("@/views/market/menu/option/OptionPanel"),
      OptionSelect: () => import ("@/views/market/menu/option/OptionSelect"),
    },
  }
</script>
