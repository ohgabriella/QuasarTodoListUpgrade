<template>
  <q-page padding>
    <q-list 
    v-if="Object.keys(shoppings).length"
    bordered>
      <shopping
        v-for="(shopping, key) in shoppings"
        v-bind:key="key"
        :shopping="shopping"
        :id="key"
      ></shopping>
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn @click="addNewShopping = true" round color="primary" icon="add" size="24px" />
    </div>

    <q-dialog v-model="addNewShopping">
      <add-shopping @close="addNewShopping = false"/>
    </q-dialog>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      addNewShopping: "false"
    };
  },
  name: "PageIndex",
  computed: {
    ...mapGetters("shoppings", ["shoppings"])
  },
  components: {
    'shopping': require("components/Shoppings/Shopping.vue").default,
    'add-shopping': require("components/Shoppings/Modals/AddShopping.vue").default,
  }
};
</script>
