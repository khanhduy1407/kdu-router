# Getting Started

> We will be using [ES2015](https://github.com/lukehoban/es6features) in the code samples in the guide.

Creating a Single-page Application with Kdu.js + kdu-router is dead simple. With Kdu.js, we are already composing our application with components. When adding kdu-router to the mix, all we need to do is map our components to the routes and let kdu-router know where to render them. Here's a basic example:

> All examples will be using the full version of Kdu to make template parsing possible.

### HTML

``` html
<script src="https://unpkg.com/kdu/dist/kdu.js"></script>
<script src="https://unpkg.com/kdu-router/dist/kdu-router.js"></script>

<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</div>
```

### JavaScript

``` js
// 0. If using a module system (e.g. via kdu-cli), import Kdu and KduRouter and then call `Kdu.use(KduRouter)`.

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Kdu.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new KduRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Kdu({
  router
}).$mount('#app')

// Now the app has started!
```

You can also checkout this example [live](http://jsfiddle.net/yyx990803/xgrjzsup/).

Notice that a `<router-link>` automatically gets the `.router-link-active` class when its target route is matched. You can learn more about it in its [API reference](../api/router-link.md).
