# git 镜像克隆仓库

哪天你如果发现在 github 的项目需要原封不动的迁移到 gitlab 的时候。这篇实用的短文可能会对你产生帮助。

## 准备

源项目仓库： https://github.com/Hzyhhh/xxx.git
目标仓库： http://gitlab.xxx.com:82/xx/xxxxx.git

首先确保目标仓库是空的或者 author 和 committer 跟源项目的是同一个人的情况下。

源仓库：

```
git clone --bare https://github.com/Hzyhhh/xxx.git

git push --mirror http://gitlab.xxx.com:82/xx/xxxxx.git
```

通过这两步操作就能镜像从源仓库建议提交记录到目标仓库拉！

## 总结

对于我这种喜欢将贡献记录在github上的人来说，这个操作完美的将我的工作内容于贡献内容结合到了一起。

不过可惜的是暂时还没找到办法将contribute也同时迁移到gitlab上。

我猜测导致这个的原因有可能是跟gitlab的贡献机制有关。

如果有知道的同学请给我提issues。