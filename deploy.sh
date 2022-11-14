#!/usr/bin/env sh

set -e

yarn run build

cd docs/.vuepress/dist

echo 'cion.top' > CNAME

git init
git add -A
git commit -m ":tada: release docs"

git push -f https://github.com/Hzyhhh/Researching.git master:pages

cd -