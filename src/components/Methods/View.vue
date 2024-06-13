<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
const textResult = ref("");
const dateResult = ref("");
const radioResult = ref("");
const checkboxResult = ref([]);
const selectResult = ref("");
</script>

<template>
  <section>
    <div>
      <h3>Click</h3>
      <div>
        <p data-test="content">{{ count }}</p>
        <button data-test="button" @click="count++">Add</button>
      </div>
    </div>
    <div>
      <h3>Input</h3>
      <input v-model="textResult" type="text" data-test="text" />
      <p data-test="result_text">{{ textResult }}</p>
      <input v-model="dateResult" type="date" data-test="date" />
      <p data-test="result_date">{{ dateResult }}</p>
    </div>
    <div>
      <h3>Radio</h3>
      <input data-test="radio_1" type="radio" v-model="radioResult" value="1" />
      <input data-test="radio_2" type="radio" v-model="radioResult" value="2" />
      <p data-test="result">{{ radioResult }}</p>
    </div>
    <div>
      <h3>Check</h3>
      <input
        data-test="checkbox_1"
        type="checkbox"
        v-model="checkboxResult"
        value="1"
      />
      <input
        data-test="checkbox_2"
        type="checkbox"
        v-model="checkboxResult"
        value="2"
      />
      <p data-test="checkbox_result">{{ checkboxResult.join(",") }}</p>
    </div>
    <div>
      <h3>Click</h3>
      <div>
        <select data-test="selectTarget" v-model="selectResult">
          <option value="orange">Orange</option>
          <option value="black">Black</option>
        </select>
        <p data-test="selectResult">{{ selectResult }}</p>
      </div>
    </div>
  </section>
</template>
