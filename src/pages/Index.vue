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
            <q-icon name="toys" size="20px" class="q-mr-xs" />
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
import { mapGetters } from 'vuex'
export default {
  name: "PageIndex",

  computed:{
    ...mapGetters('shoppings', ['shoppings'])

  }
  
}
</script>
