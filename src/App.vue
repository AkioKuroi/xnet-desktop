<script setup>
import { RouterView } from "vue-router";
import store from "./store";
import router from "./router";

console.log(store.getters);
if (!store.getters.isLoggedIn && !store.getters.user && !store.getters.token) {
  router.push({ name: "signIn" });
}
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import "./global/global";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: $fonts;
  background-color: $bg_primary;
  color: white;
  width: 100vw;
  height: 100vh;
}

h1 {
  font-weight: 800;
}
</style>
