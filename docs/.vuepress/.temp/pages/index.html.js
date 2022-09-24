export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"./images/logo.jpg\",\"actionText\":\"关于我 →\",\"actionLink\":\"/pages/aboutme/\",\"footerHtml\":true,\"footer\":\"<a href=\\\"https://beian.miit.gov.cn/\\\">粤ICP备2022024188号</a>| Copyright © 2022-present\"},\"excerpt\":\"\",\"headers\":[],\"git\":{\"updatedTime\":1663895805000,\"contributors\":[{\"name\":\"aaronmo\",\"email\":\"554602580@qq.com\",\"commits\":5},{\"name\":\"AaronMo\",\"email\":\"38402273+xiaolong554602580@users.noreply.github.com\",\"commits\":3}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
