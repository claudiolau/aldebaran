#!/bin/bash

# generate a new component template

# check if command line argument is empty or not present

if [[ ${#1} > 1] && $1 ]]
then
        cd components
        sentenceCase=`echo "$1" | sed -E "s/[[:alnum:]_']+/\u&/g"`
        lowerCase=`echo "$1" | tr '[:upper:]' '[:lower:]'`
        rm -rf $sentenceCase && mkdir $sentenceCase && cd $sentenceCase
        touch _$lowerCase.module.scss
        touch $sentenceCase.stories.tsx
        touch index.ts
        touch $sentenceCase.tsx
        echo "Created Component $sentenceCase..."
        exit 0
else
    echo "Illegal number of arguments"
    exit 1 
fi