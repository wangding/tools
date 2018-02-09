#!/bin/bash

mkdir .tmp
cp $1* .tmp
rename $1 $2 .tmp/*
mv .tmp/* .
rm -rf .tmp

