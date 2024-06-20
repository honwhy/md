import Vue from 'vue'
import ElementUI from 'element-ui'
import { createPinia, PiniaVuePlugin } from 'pinia'

import 'url:https://cdn-doocs.oss-cn-shenzhen.aliyuncs.com/gh/wechatsync/article-syncjs@latest/dist/styles.css'
import 'url:https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css'

// import '@/utils/prettify.min.js'
// import '@/utils/article-syncj.min.js'
// import 'url:https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs'
// mermaid.initialize({ startOnLoad: true })
// window.mermaid = mermaid

import 'element-ui/lib/theme-chalk/index.css'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/xq-light.css'

/* 每个页面公共css */
import './assets/less/theme.less'
import './assets/less/style-mirror.less'

import 'codemirror/mode/css/css'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/css-hint'

import './plugins/element'
import App from './App.vue'

Vue.use(ElementUI).use(PiniaVuePlugin)

Vue.config.productionTip = false

App.mpType = `app`

new Vue({
  ...App,
  pinia: createPinia(),
}).$mount(`#app`)
