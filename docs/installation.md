# Installation

## Direct Download / CDN

[https://unpkg.com/kdu-router/dist/kdu-router.js](https://unpkg.com/kdu-router/dist/kdu-router.js)

<!--email_off-->
[Unpkg.com](https://unpkg.com) provides npm-based CDN links. The above link will always point to the latest release on npm. You can also use a specific version/tag via URLs like `https://unpkg.com/kdu-router@2.0.0/dist/kdu-router.js`.
<!--/email_off-->

Include `kdu-router` after Kdu and it will install itself automatically:

``` html
<script src="/path/to/kdu.js"></script>
<script src="/path/to/kdu-router.js"></script>
```

## npm

``` bash
npm install kdu-router
```

When used with a module system, you must explicitly install the router via `Kdu.use()`:

``` js
import Kdu from 'kdu'
import KduRouter from 'kdu-router'

Kdu.use(KduRouter)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `kdu-router` yourself if
you want to use the latest dev build.

``` bash
git clone https://github.com/khanhduy1407/kdu-router.git node_modules/kdu-router
cd node_modules/kdu-router
npm install
npm run build
```
