<template>
  <q-page padding>
    <q-list bordered>
      <q-item
        v-for="shopping in shoppings"
        v-bind:key="shopping.id"
        @click="shopping.completed = !shopping.completed"
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
            <q-icon name="plus_one" size="20px" class="q-mr-xs" />
            <div class="column justify-center">
              <q-item-label class="row justify-end" caption>{{ shopping.number }}</q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "PageIndex",

  data() {
    return {
      shoppings: [
        {
          id: 1,
          name: "Arroz",
          completed: false,
          description: "arroz branco",
          number: 2
        },
        {
          id: 2,
          name: "Feijão",
          completed: false,
          description: "feijão preto",
          number: 2
        },
        {
          id: 3,
          name: "Macarrão",
          completed: false,
          description: "furadinho e penne",
          number: 3
        }
      ]
    };
  }
};
</script>
