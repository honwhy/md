import { defineConfig } from 'wxt'
import vue from '@vitejs/plugin-vue2'
import * as path from 'node:path'

// See https://wxt.dev/api/config.html
export default defineConfig({
  root: 'src',
  publicDir: '../public',
  manifest: ({ mode }) => ({
    version: '0.0.4',
    name: mode === 'development' ? '公众号文章编辑器-dev' : '公众号文章编辑器',
    permissions: ['storage'],
    host_permissions: [
      'https://*.github.com/*',
      '*://*.githubusercontent.com/*',
      'https://fastly.jsdelivr.net/*',
      'https://gitee.com/*',
      'https://*.aliyuncs.com/*',
      'https://cdn.jsdelivr.net/*',
      'https://api.weixin.qq.com/*'
    ],
    web_accessible_resources: [
      {
        resources: ['*.png', '*.svg', '*.txt', 'index.html'],
        matches: ['<all_urls>'],
      },
    ],
  }),
  imports: {
    addons: {
      vueTemplate: true,
    },
  },
  vite: () => ({
    plugins: [
      vue(),
    ],
    build: {
      // Enabling sourcemaps with Vue during development is known to cause problems with Vue
      sourcemap: false,
      // rollupOptions: {
      //   output: {
      //     format: 'esm',
      //     inlineDynamicImports: false,
      //     manualChunks: {
      //       lodash: ['lodash'],
      //       vue: ['vue']
      //     }
      //   },
      // },
    },
    assetsInclude: ['**/*.md'],
    define: {
      global: 'globalThis'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }),
})
