# kdu-router

> This is kdu-router 3.0 which works only with Kdu 2.0..

### Introduction

`kdu-router` is the official router for Kdu.js. It deeply integrates with Kdu.js core to make building Single Page Applications with Kdu.js a breeze. Features include:

- Nested route/view mapping
- Modular, component-based router configuration
- Route params, query, wildcards
- View transition effects powered by Kdu.js' transition system
- Fine-grained navigation control
- Links with automatic active CSS classes
- HTML5 history mode or hash mode, with auto-fallback in IE9
- Customizable Scroll Behavior

Get started with the [documentation](http://khanhduy1407.github.io/kdu-router), or play with the [examples](https://github.com/khanhduy1407/kdu-router/tree/dev/examples) (see how to run them below).

### Development Setup

``` bash
# install deps
npm install

# build dist files
npm run build

# serve examples at localhost:8080
npm run dev

# lint & run all tests
npm test

# serve docs at localhost:8080
npm run docs
```

## Releasing

- `yarn run release`
  - Ensure tests are passing `yarn run test`
  - Build dist files `VERSION=<the_version> yarn run build`
  - Build changelog `yarn run changelog`
  - Commit dist files `git add dist CHANGELOG.md && git commit -m "[build $VERSION]"`
  - Publish a new version `npm version $VERSION --message "[release] $VERSION"
  - Push tags `git push origin refs/tags/v$VERSION && git push`
  - Publish to npm `npm publish`

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2022 NKDuy


