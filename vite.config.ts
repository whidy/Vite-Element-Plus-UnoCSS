import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  resolve: {
    alias: {
      '@': pathSrc,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'),
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      dts: path.resolve(pathSrc, 'typings', 'components.d.ts'),
    }),
    Unocss({
      rules: [['red', { color: 'red' }, { layer: 'red' }]],
      preflights: [
        {
          layer: 'blue',
          /**
           * 2022年06月16日
           * I don't know how to use fetch in example as below:
           * getCSS: async () => (await fetch('my-style.css')).text(),
           * from: https://github.com/unocss/unocss#layers
           */
          getCSS: async () => {
            const txt = (await import('./src/styles/blue.js')).default
            return txt
          },
        },
      ],
      presets: [
        presetUno({
          // not working?
          // layers: {
          //   red: 2,
          //   blue: 1,
          // },
          // sortLayers: ['blue', 'red'],
        }),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),
    Inspect(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('element-plus/theme-chalk/')) {
            return 'element-plus'
          }
        },
      },
    },
  },
})
