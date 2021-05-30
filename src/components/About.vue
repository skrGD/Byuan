<template>
  <div>我是一个about页面</div>
  <a-button type="primary">Primary</a-button>
</template>
<script lang="ts" setup>
import { defineComponent, reactive, ref, toRefs, computed } from "@vue/runtime-core";
import { Button } from "ant-design-vue"


export const inputVal = ref(0)
export const peopelObj = reactive({
  name: 'name',
  age: 16
})

export const comVal = computed(() => inputVal.value * 2)

export default defineComponent({
  name: 'About',
  components: {
    Button,
  },

})




</script>

<style lang="scss" scoped>
</style>