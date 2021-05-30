<template>
  <h1>{{ a }}</h1>
  <a-button type="primary" @click="btnClick">Primary</a-button>
  <a-input v-model:value="a" placeholder="Basic usage" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Button as AButton, Input as AInput } from 'ant-design-vue';

const a = ref(1);
const btnClick = () => {
  a.value++;
};


</script>

<style scoped>
</style>
