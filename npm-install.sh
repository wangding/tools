#!/bin/bash

# 安装 nrm npm 源管理工具
sudo npm i -g --registry=https://registry.npm.taobao.org nrm

# 安装静态代码检查工具
sudo npm i -g --registry=https://registry.npm.taobao.org htmlhint csslint eslint ejs-lint

# 安装 gitbook 命令行工具
sudo npm i -g --registry=https://registry.npm.taobao.org gitbook-cli gitbook-install

# 安装图片压缩工具
sudo npm i -g --registry=https://registry.npm.taobao.org pic2webp svgo cwebp-bin gif2webp-bin

# 安装热加载工具
sudo npm i -g --registry=https://registry.npm.taobao.org browser-sync

# 安装 node.js 服务重启工具
sudo npm i -g --registry=https://registry.npm.taobao.org nodemon

# 安装 koa 脚手架
sudo npm i -g --registry=https://registry.npm.taobao.org koa-generator

# 安装 javascript 原代码分析工具
cd
git clone https://github.com/scottrogowski/code2flow
cd code2flow
sudo python ./setup.py install
cd ..
rm -rf ~/code2flow
