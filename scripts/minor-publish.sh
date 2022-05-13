#!/bin/bash

# auto publish minor version
npm version patch 
git push --tags 
npm publish