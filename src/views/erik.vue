<!-- https://www.youtube.com/watch?v=FJRuG85tXV0&pp=ygUGdml0ZXN0 -->

<script setup lang="ts">
import View from "@/components/Erik/View.vue";
import MyPokemon from "@/components/Erik/MyPokemon.vue";
</script>

<template>
  <h2>Hello World</h2>
  <View element="div">Hello from view</View>
  <MyPokemon />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
