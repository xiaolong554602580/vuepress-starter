export const themeData = JSON.parse("{\"repo\":\"xiaolong554602580/vuepress-starter\",\"docsDir\":\"docs\",\"locales\":{\"/\":{\"navbar\":[{\"text\":\"前端学习\",\"link\":\"/accumulate/\"},{\"text\":\"后端学习\",\"link\":\"/anyway/\"},{\"text\":\"职业技能\",\"link\":\"/algorithm/\"}],\"sidebar\":{\"/accumulate/\":[{\"text\":\"前端学习\",\"children\":[\"/accumulate/README.md\"]}],\"/anyway/\":[{\"text\":\"后端学习\",\"children\":[\"/anyway/README.md\"]}],\"/algorithm/\":[{\"text\":\"职业技能\",\"children\":[\"/algorithm/README.md\"]}]},\"editLinkText\":\"Edit this page on GitHub\",\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
