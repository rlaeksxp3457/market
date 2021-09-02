<template>
  <v-container>
    <option-select />

    <v-divider />

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
