<template>
  <q-page padding>
    <q-list bordered>
      <shopping v-for="(shopping, key) in shoppings" 
      v-bind:key="key" 
      :shopping="shopping"
      :id='key'></shopping>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",

  computed: {
    ...mapGetters("shoppings", ["shoppings"])
  },
  components: {
    'shopping': require("components/Shoppings/Shopping.vue").default
  }
};
</script>
