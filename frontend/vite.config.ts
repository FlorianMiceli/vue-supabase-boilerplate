import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      dts: 'src/types/typed-router.d.ts',
    }),
    vue(),
    Components({
      dts: 'src/types/components.d.ts',
      dirs: ['src/components', 'src/views', 'src/pages'],
      resolvers: [ElementPlusResolver()]
    }),
    AutoImport({
      dts: 'src/types/auto-imports.d.ts',
      imports: [
        'vue',
        VueRouterAutoImports, 
        'pinia'
      ],
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
