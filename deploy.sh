#!/usr/bin/env sh

set -e


cd docs/.vuepress/dist

echo 'blog.cion.asia' > CNAME

git init
git add -A
git commit -m ":tada: release docs"

# 确保分支名为 master
git branch -M master

git push -f https://github.com/Hzyhhh/Researching.git master:pages

cd -