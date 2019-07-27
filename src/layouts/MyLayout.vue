<template>
  <q-layout view="lHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>TodoList</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="light-blue-1">
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item
          clickable
          class="text-grey-10"
          exact
          v-for="nav in navs"
          v-bind:key="nav.label"
          :to="nav.to"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
            <q-item-label caption>{{ nav.capition }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: "TodoList",
          icon: "view_list",
          capition: "Things to do",
          to: "/"
        },
        {
          label: "Settings",
          icon: "settings",
          capition: "Help",
          to: "/settings"
        }
      ]
    };
  },
  methods: {
    openURL
  }
};
</script>

<style lang="scss">
</style>
