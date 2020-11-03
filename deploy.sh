set -e

yarn build
rm -rf ./joegaebel.github.io/static
cp -r build/* ./joegaebel.github.io
cd joegaebel.github.io
git add .
git commit -m "Update site"
git push origin master
cd ..
git submodule update --remote
