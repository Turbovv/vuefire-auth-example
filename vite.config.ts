import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Component from 'unplugin-vue-components/vite'
import RadixVueResolver from 'radix-vue/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Component({
      dts: true,
      resolvers: [
        RadixVueResolver()
      ],
    }),
  ],
})