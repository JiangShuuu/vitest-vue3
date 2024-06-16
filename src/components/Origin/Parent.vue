<template>
  <form
    ref="ruleFormRef"
    @submit.prevent="submitForm"
    @reset.prevent="resetForm"
    style="max-width: 600px"
    class="demo-ruleForm"
  >
    <div class="form-item">
      <label for="pass">Password</label>
      <input
        data-test="pass"
        v-model="ruleForm.pass"
        type="password"
        id="pass"
        autocomplete="off"
        @blur="validatePass"
      />
      <div v-if="errors.pass" class="error">{{ errors.pass }}</div>
    </div>
    <div class="form-item">
      <label for="checkPass">Confirm</label>
      <input
        data-test="checkPass"
        v-model="ruleForm.checkPass"
        type="password"
        id="checkPass"
        autocomplete="off"
        @blur="validatePass2"
      />
      <div v-if="errors.checkPass" class="error">{{ errors.checkPass }}</div>
    </div>
    <div class="form-item">
      <label for="age">Age</label>
      <input
        data-test="age"
        v-model.number="ruleForm.age"
        type="text"
        id="age"
        @blur="checkAge"
      />
      <div v-if="errors.age" class="error">{{ errors.age }}</div>
    </div>
    <div class="form-item">
      <button data-test="submit" type="submit">Submit</button>
      <button type="reset">Reset</button>
    </div>
  </form>
  <p data-test="result">{{ result }}</p>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const ruleFormRef = ref<HTMLFormElement | null>(null);
const result = ref<string | null>(null);

const ruleForm = reactive({
  pass: "",
  checkPass: "",
  age: "",
});

const errors = reactive({
  pass: "",
  checkPass: "",
  age: "",
});

const checkAge = () => {
  errors.age = "";
  if (!ruleForm.age) {
    errors.age = "Please input the age";
  } else if (!Number.isInteger(ruleForm.age)) {
    errors.age = "Please input digits";
  } else if (+ruleForm.age < 18) {
    errors.age = "Age must be greater than 18";
  }
};

const validatePass = () => {
  errors.pass = "";
  if (ruleForm.pass === "") {
    errors.pass = "Please input the password";
  } else if (ruleForm.checkPass !== "") {
    validatePass2();
  }
};

const validatePass2 = () => {
  errors.checkPass = "";
  if (ruleForm.checkPass === "") {
    errors.checkPass = "Please input the password again";
  } else if (ruleForm.checkPass !== ruleForm.pass) {
    errors.checkPass = "Two inputs don't match!";
  }
};

const submitForm = () => {
  checkAge();
  validatePass();
  validatePass2();
  if (!errors.pass && !errors.checkPass && !errors.age) {
    console.log("submit!");
    result.value = "success";
  } else {
    console.log("error submit!");
    result.value = "error";
  }
};

const resetForm = () => {
  ruleForm.pass = "";
  ruleForm.checkPass = "";
  ruleForm.age = "";
  errors.pass = "";
  errors.checkPass = "";
  errors.age = "";
  result.value = null;
};
</script>

<style>
.demo-ruleForm {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-item {
  display: flex;
  flex-direction: column;
}
.error {
  color: red;
  font-size: 12px;
}
</style>
