# [Product discovery](https://teko.now.sh/) &middot; [![CircleCI Status](https://circleci.com/gh/hieuhani/teko.svg?style=svg)](https://github.com/hieuhani/teko) [![Known Vulnerabilities](https://snyk.io/test/github/hieuhani/teko/badge.svg?targetFile=package.json)](https://snyk.io/test/github/hieuhani/teko?targetFile=package.json) ![GitHub top language](https://img.shields.io/github/languages/top/hieuhani/teko) [![codecov](https://codecov.io/gh/hieuhani/teko/branch/master/graph/badge.svg)](https://codecov.io/gh/hieuhani/teko)


## Introduction
This project tends to use as less dependencies as possible.
<dl>
  <dt>State management</dt>
  <dd>No state management library, just build-in React context.</dd>

  <dt>Router</dt>
  <dd>No router library, use React useReducer hook and React context.</dd>

  <dt>Styling</dt>
  <dd>Use `bootstrap-reboot` for CSS normalize, and `styled-components` to style React components.</dd>

  <dt>Animation</dt>
  <dd>Use `react-spring` to build transition between screen.</dd>

  <dt>Mobile slider</dt>
  <dd>Use `swiperjs` to implement mobile touch slider.</dd>

  <dt>Static checking</dt>
  <dd>Using Typescript to do catch types and type errors, do static test in testing trophy.</dd>

  <dt>Code quality</dt>
  <dd>ESLint and Prettier are used to make sure code quality.</dd>

  <dt>PWA support</dt>
  <dd>Use WorkboxWebpackPlugin and ManifestPlugin to generate service worker to cache all static assets. Intercept `apisauce` to cache data by path and query string then save to IndexedDB.</dd>

  <dt>Others</dt>
  <dd>Use `lodash.debounce` for handling keyword enter and window sizing handler. Use `lodash.throttle` for handing infinite scrolling. Use `localforage` for IndexedDB wrapper.</dd>
</dl>





## Quick start

1.  Clone this repo using `git clone https://github.com/hieuhani/teko.git`
2.  Run `yarn install` to install dependencies
3.  Run `yarn test` to verify
