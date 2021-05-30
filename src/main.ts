import { createApp } from 'vue'
import App from './App.vue'
import { store, key } from './store'
import 'ant-design-vue/dist/antd.css';
import router from '@router/index'
import VueAxios from 'vue-axios'
import { Request } from '@utils/request';

createApp(App).use(store, key).use(VueAxios, Request.init()).use(router).mount('#app')
