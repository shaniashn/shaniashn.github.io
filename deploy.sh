#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "deployment v1.2"
git push -f git@github.com:shaniashn/shaniashn.github.io.git master:gh-pages


cd -
