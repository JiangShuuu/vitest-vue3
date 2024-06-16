<template>
  <div class="flex flex-wrap gap-4 items-center">
    <el-select
      data-test="el_select"
      data-testid="el_select"
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :data-test="item.value"
      />
    </el-select>
    <div data-test="result">{{ value }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
];
</script>
