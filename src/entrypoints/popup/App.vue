<script lang="ts" setup>
import { ref } from 'vue'

const logo = ref(browser.runtime.getURL('/icon-256.png'))
function onOpenOption() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <div class="container popup-body">
    <div class="title" style="height: 40px; display: inline-flex;align-items: center;">
      <img style="height: 40px;" :src="logo">
      <span style="font-size: 16px; line-height: 40px; font-weight: bold;margin-left: 8px;">使用必读</span>
    </div>
    <section style="margin-top: 12px;line-height: 28px;">
      <div>如果您希望使用微信公众号素材库作为图床功能，需要进行以下配置：</div>
      <div>1.开启公众号开发者模式 <span><a href="https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Getting_Started_Guide.html"  target="_blank">查看文档</a></span></div>
      <div>2.配置IP白名单<span><a href="https://mpmd.pages.dev/tutorial" target="_blank">使用教程</a></span></div>
      <div><a href="#" @click="onOpenOption">开始使用</a></div>
    </section>
  </div>
</template>

<style lang="less">
/* 移除 hover 状态下的边框 */
.el-button:hover {
  border-color: transparent !important;
}

/* 移除 focus 状态下的边框 */
.el-button:focus {
  outline: none !important; /* 可能还需要调整 box-shadow 或 border-color */
}

/* 移除 active 状态下的边框 */
.el-button:active {
  border-color: transparent !important;
}
/* 美化滚动条整体样式 */
::-webkit-scrollbar {
  width: 10px; /* 滚动条宽度 */
}

/* 美化滚动条轨道（滑动轨道） */
::-webkit-scrollbar-track {
  background: rgba(204, 204, 204, 0.1); /* 轨道颜色 */
}

/* 美化滚动条滑块（滚动 thumb） */
::-webkit-scrollbar-thumb {
  background: rgba(204, 204, 204, 0.5); /* 滑块颜色 */
  border-radius: 6px; /* 圆角 */

  /* 滚动状态下的滑块样式 */
  &:hover,
  &-active {
    width: 12px;
    background: rgba(204, 204, 204, 0.7); /* 鼠标悬停时滑块颜色加深 */
  }
}
</style>

<style scoped lang="less">
.popup-body {
  min-width: 300px;
  scroll-behavior: auto;
  margin-top: 20px;
}
.container {
  width: 100%;
  box-sizing: border-box;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
