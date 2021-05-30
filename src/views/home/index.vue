<template>
  <h1>{{ storeName }}</h1>
  <a-input :value="count" placeholder="Basic usage" />
</template>

<script lang="ts">
import { ref, defineComponent, PropType, reactive } from 'vue';
import { useStore } from '@store/index';
import { login } from '@api/user/login';
import { Input } from 'ant-design-vue';
interface PersonInfo {
  name: string,
  age: number
}
export default defineComponent({
  name: 'HelloWorld',
  components: {
    'a-input': Input
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
    person: {
      type: Object as PropType<PersonInfo>
    }
  },
  setup: () => {
    const count = ref(0);
    const params = reactive({
      name: '',
      password: ''
    });
    const store = useStore();
    const storeName = store.state.user.name;
    const storegetName = store.getters['user/name'];
    console.log(storegetName);
    store.dispatch('user/GET_DATA', '111');
    login(params).then(res => {
      console.log(res);
    });
    return { count, storeName };
  }
});
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
