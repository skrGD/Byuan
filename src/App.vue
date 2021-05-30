<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <a-button type="primary" @click="homeClick">home</a-button>
  <a-button @click="aboutClick">about</a-button>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Button } from 'ant-design-vue';
import { useRouter } from 'vue-router';


export default defineComponent({
  name: 'App',
  components: {
    'a-button': Button
  },
  setup() {
    const router = useRouter();
    const aboutClick = () => {
      router.push({ path: '/about' });
    };

    const homeClick = () => {
      router.push({ path: '/home' });
    };
    return {
      aboutClick,
      homeClick
    };
  }

});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
