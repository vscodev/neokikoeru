import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      'link',
      { rel: 'icon', href: '/logo.png' },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vscodev/neokikoeru' },
    ],
  },
  markdown: {
    theme: {
      light: 'light-plus',
      dark: 'dark-plus',
    },
  },
  sitemap: {
    hostname: 'https://neokikoeru.voicehub.top',
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "Neokikoeru",
      description: "面向 DLsite 音声作品的自托管流媒体服务器",
      themeConfig: {
        nav: [
          { text: '演示', link: 'https://try-neokikoeru.voicehub.top' },
          { text: '指南', link: '/guide' },
          { text: '配置', link: '/config' },
          { text: 'API', link: '/api' },
          { text: '许可证', link: '/license' },
          { text: '常见问题', link: '/faq' },
        ],
        sidebar: {
          '/guide': {
            base: '/guide/',
            items: [
              { text: '快速开始', link: 'getting-started' },
              { text: '添加存储', link: 'storages' },
              { text: '使用技巧', link: 'usage-tips' },
              { text: 'WebDAV', link: 'webdav' },
            ],
          },
          '/config': {
            base: '/config/',
            items: [
              { text: '日志配置', link: 'log' },
              { text: '数据库配置', link: 'database' },
              { text: '服务器配置', link: 'server' },
              { text: 'DLsite 配置', link: 'dlsite' },
            ],
          },
        },
        search: {
          options: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索',
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        outline: {
          label: '页面导航',
        },
        lastUpdated: false,
        notFound: {
          title: '页面未找到',
          quote: '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
          linkLabel: '前往首页',
          linkText: '带我回首页',
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容',
      }
    },
  }
})
