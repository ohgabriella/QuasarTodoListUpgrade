<template>
  <q-page padding>
    <q-list bordered>
      <shopping
        v-for="(shopping, key) in shoppings"
        v-bind:key="key"
        :shopping="shopping"
        :id="key"
      ></shopping>
    </q-list>

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn @click="addNewTask = true" round color="primary" icon="add" size="24px" />
    </div>

    <q-dialog v-model="addNewTask">
      <add-shopping />
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
      addNewTask: "false"
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
