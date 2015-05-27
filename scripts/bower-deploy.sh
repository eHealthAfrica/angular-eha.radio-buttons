#!/usr/bin/env bash
set -e

error() { echo "$0: $1"; exit 1; }

[[ "$TRAVIS" ]] || error "Please run this script in TravisCI"
[[ "$TRAVIS_TAG" ]] || error "Only deploying tagged builds"
[[ "$TRAVIS_PULL_REQUEST" == "false" ]] || error "Not deploying pull requests"

git clone https://github.com/eHealthAfrica/angular-eha.radio-buttons-bower.git deploy
mv bower.json README.md LICENSE dist/* deploy
cd deploy
git add .
git config user.email "ehealthafrica-ci@tlvince.com"
git config user.name "eHealth Africa CI"
git commit --all --message "$TRAVIS_TAG"
git tag "$TRAVIS_TAG"
echo -e "machine github.com\n  login $CI_USER_TOKEN" >> ~/.netrc
git push --tags origin master
