#!/bin/bash

# 配置 CentOS 阿里镜像源
sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup

sudo wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo

sudo yum makecache

# ag 搜索工具
sudo yum install -y epel-release.noarch
sudo yum install -y the_silver_searcher

# nc 命令
sudo yum install -y nc

# graphviz 工具
sudo yum install -y graphviz
