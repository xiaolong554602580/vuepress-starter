import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import type { NavbarConfig, SidebarConfig } from "@vuepress/theme-default";
import { head } from "./configs/head";

const navbarZh: NavbarConfig = [
  {
    text: "前端学习",
    link: "/accumulate/",
  },
  {
    text: "后端学习",
    link: "/anyway/",
  },
  {
    text: "职业技能",
    link: "/algorithm/",
  },
];
const sidebarZh: SidebarConfig = {
  "/accumulate/": [
    {
      text: "前端学习",
      children: [
        "/accumulate/README.md",
        "/accumulate/2022_3_11.md",
        "/accumulate/mypage0.md",
        "/accumulate/mypage1.md",
        "/accumulate/mypage2.md",
      ],
    },
  ],
  "/anyway/": [
    {
      text: "后端学习",
      children: [
        "/anyway/README.md",
        "/anyway/linuxSetup.md",
        "/anyway/2022_5_20.md",
        "/anyway/2022-3-13.md",
        "/anyway/2022-08-11.md",
        "/anyway/2022-08-12.md",
      ],
    },
  ],
  "/algorithm/": [
    {
      text: "职业技能",
      children: [
        "/algorithm/README.md",
        "/algorithm/2022_1_13.md",
        "/algorithm/2022_5_15.md",
      ],
    },
  ],
};

export default defineUserConfig({
  head: head,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "色彩趣图",
      description: "为所谓的想法，赋予实现",
    },
  },
  theme: defaultTheme({
    repo: "xiaolong554602580/vuepress-starter",
    docsDir: "docs",
    locales: {
      "/": {
        navbar: navbarZh,
        sidebar: sidebarZh,
        editLinkText: "Edit this page on GitHub",
      },
    },
  }),
});
