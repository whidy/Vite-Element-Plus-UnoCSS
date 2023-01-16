<template>
  <el-button @click="changeArr">change array</el-button>
  <div>state: {{ state }}</div>
  <div>another: {{ another }}</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const newArr = [33, 33];
const state = reactive({
  arr: [1, 2, 3],
});

const changeArr = () => {
  state.arr.splice(0, state.arr.length, ...newArr); // will work
  // state.arr = newArr; // won't work
};

const another = reactive([{ arr: state.arr }]);
</script>
