export default defineBackground({
  type: 'module',
  main() {
    // 插件首次安装或更新时触发
    browser.runtime.onInstalled.addListener((detail) => {
      if (detail.reason === 'install')
        browser.tabs.create({ url: 'https://mpmd.pages.dev/welcome' })
      else if (detail.reason === 'update')
        browser.runtime.openOptionsPage()
    })
  }
})