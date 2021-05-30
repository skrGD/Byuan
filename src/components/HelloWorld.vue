<template>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { ref, defineComponent, defineProps, PropType, reactive } from 'vue'
import { useStore } from "@store/index"
import { login } from "@api/user/login"
interface PersonInfo {
  name: string,
  age: number
}
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    },
    person: {
      type: Object as PropType<PersonInfo>
    }
  },
  setup: () => {
    const count = ref(0)

    const params = reactive({
      name: '',
      password: ''
    })

    const store = useStore()

    store.dispatch('user/GET_DATA','111')

    login(params).then(res => {
       console.log(res);
      })
    return { count }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
