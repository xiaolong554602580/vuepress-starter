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
      ],
    },
  ],
  "/anyway/": [
    {
      text: "后端学习",
      children: [
        "/anyway/README.md",
        ],
    },
  ],
  "/algorithm/": [
    {
      text: "职业技能",
      children: [
        "/algorithm/README.md",
      ],
    },
  ],
};

export default defineUserConfig({
  base:'.',
  head: head,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "谦受益",
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
