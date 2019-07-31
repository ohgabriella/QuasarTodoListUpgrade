<template>
  <q-item
    @click="updateShopping({ id: id, updates: { completed: !shopping.completed  }})"
    :class="!shopping.completed ? 'bg-teal-2' : 'bg-deep-purple-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox v-model="shopping.completed" />
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough' : shopping.completed }">{{ shopping.name }}</q-item-label>
      <q-item-label caption>{{ shopping.description }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-icon name="toys" size="20px" class="q-mr-xs" />
        <div class="column justify-center">
          <q-item-label class="row justify-end" caption>{{ shopping.number }}</q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn
        @click.stop="promptToDelete(id)"
        flat
        round
        dense
        color="negative"
        icon="delete_outline"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["shopping", "id"],
  methods: {
    ...mapActions("shoppings", ["updateShopping", "deleteShopping"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Deseja deletar?",
          cancel: true,
          persistent: true
        })
        .onOk(() => {
          this.deleteShopping(id);
        });
    }
  }
};
</script>
