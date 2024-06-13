<template>
  <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
defineProps({
  element: {
    type: String,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    required: false,
  },
  ariaLabel: {
    type: String,
    default: "",
  },
});
</script>
