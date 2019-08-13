<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add shopping</div>
      <q-space />
      <q-btn v-close-popup flat round dense icon="close" />
    </q-card-section>
    <form @submit.prevent="submitForm">
      <q-card-section>
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="shoppingToSubmit.name"
            label="Name"
            :rules="[val => !!val || 'Field is required']"
            ref="name"
          />
        </div>
        <div class="row q-mb-sm">
          <q-input outlined v-model="shoppingToSubmit.description" label="Description" />
        </div>
        <div class="row q-mb-sm">
          <q-input outlined v-model="shoppingToSubmit.number" label="Number" />
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Save" color="primary" v-close-popup type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      shoppingToSubmit: {
        name: "",
        description: "",
        number: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions('shoppings', ['addShopping']),
    submitForm() {
      this.$refs.name.validate();
      if(!this.$refs.name.hasError){
        this.submitShopping();
      }
    },
    submitShopping(){
      this.addShopping(this.shoppingToSubmit);
    }
  }
};
</script>
