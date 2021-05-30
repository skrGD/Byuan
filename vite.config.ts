import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'


function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

export default defineConfig({
  plugins: [vue(), styleImport({
    libs: [{
      libraryName: 'ant-design-vue',
      esModule: true,
      resolveStyle: (name) => {
        return `ant-design-vue/es/${name}/style/css`;
      },
    }]
  })],

  server: {
    open: 'name',  //在服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL的路径名。
    proxy: {
      '/api': {
        target: 'http://localhost:9527/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/')
      },
    }
  },

  resolve: {
    alias: {
      '@': _resolve('./src'),
      '@api': _resolve('./src/api'),
      '@utils': _resolve('./src/utils'),
      '@store': _resolve('./src/store'),
      '@views': _resolve('./src/views'),
      '@router': _resolve('./src/router'),
    },
  },
})
