<template>
  <section>
    <SectionBlockTitle :title="title" />
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import SectionBlockTitle from "./SectionBlockTitle.vue";
</script>
