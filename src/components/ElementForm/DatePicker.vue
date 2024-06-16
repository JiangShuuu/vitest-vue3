<template>
  <div class="block">
    <span class="demonstration">Default</span>
    <div data-testid="date_picker">
      <el-date-picker
        v-model="value"
        type="date"
        placeholder="Select date and time"
        value-format="YYYY-MM-DD"
      />
    </div>
    <p>Result:: {{ value }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref("");
</script>
