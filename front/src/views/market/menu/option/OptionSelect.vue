<template>
  <v-container>
    <v-row>
      <v-col xl="9">
        <v-select
          :items="items"
          label="Menu"
          outlined
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>
