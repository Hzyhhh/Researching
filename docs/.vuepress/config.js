const base = "/Researching";

module.exports = {
  base,
  title: "zy-research",
  description: "总结、吐槽空间",
  docsDir: "docs",
  themeConfig: {
    sidebar: [
      {
        title: "文档",
        path: "/",
        children: [
          {
            title: "'冒烟测试'到底冒的是啥",
            path: "/smokeTest/",
          },
          {
            title: "CSS Grid",
            path: "/CSSGrid/",
          },
          {
            title: "BFC",
            path: "/BFC/",
          },
          {
            title: "性能优化的方案",
            path: "/performance/",
          },
          {
            title: "git 镜像克隆仓库",
            path: "/gitMirrorClone/",
          },
          {
            title: "git提交未计算贡献(未显示小绿点)的解决办法",
            path: "/gitContribute/",
          },
        ],
      },
    ],
  },
};
