const base = "/Researching/";

module.exports = {
  base,
  title: "zy-research",
  description: "zy-research的个人总结空间",
  docsDir: "docs",
  themeConfig: {
    sidebar: [
      {
        title: "文档",
        path: "/",
        children: [
          {
            title: "怎么判断 JavaScript 的各种类型--回字的六种写法",
            path: "/js-type/",
          },
          {
            title: "Generator 生成器与协程",
            path: "/generator/",
          },
          {
            title: "passive 事件处理器",
            path: "/passive/",
          },
          {
            title: "截屏插件显示异常踩坑修复解决流水",
            path: "/capture-problem/",
          },
          {
            title: "对比localStorage和indexDB",
            path: "/indexDB/",
          },
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
          {
            title: "面试题",
            path: "/interview/",
          },
          {
            title: "说说",
            path: "/myZoom/",
          },
        ],
      },
    ],
  },
};
