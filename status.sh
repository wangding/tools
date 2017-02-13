#!/bin/bash

# 变量定义
curDir=$(pwd)

# 遍历子目录
for file in `ls $curDir`
do
    if [ -d $curDir/$file ]
    then
        dir=${curDir}/${file}
	echo $file
	echo ================
	cd $dir
	git status -sb
	echo
    fi
done


