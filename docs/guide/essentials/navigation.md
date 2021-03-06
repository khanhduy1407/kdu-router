# Programmatic Navigation

Aside from using `<router-link>` to create anchor tags for declarative navigation, we can do this programmatically using the router's instance methods.

#### `router.push(location, onComplete?, onAbort?)`

**Note: Inside of a Kdu instance, you have access to the router instance as `$router`. You can therefore call `this.$router.push`.**

To navigate to a different URL, use `router.push`. This method pushes a new entry into the history stack, so when the user clicks the browser back button they will be taken to the previous URL.

This is the method called internally when you click a `<router-link>`, so clicking `<router-link :to="...">` is the equivalent of calling `router.push(...)`.

| Declarative | Programmatic |
|-------------|--------------|
| `<router-link :to="...">` | `router.push(...)` |

The argument can be a string path, or a location descriptor object. Examples:

``` js
// literal string path
router.push('home')

// object
router.push({ path: 'home' })

// named route
router.push({ name: 'user', params: { userId: 123 }})

// with query, resulting in /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```

In 2.2.0+, optionally provide `onComplete` and `onAbort` callbacks to `router.push` or `router.replace` as the 2nd and 3rd arguments. These callbacks will be called when the navigation either successfully completed (after all async hooks are resolved), or aborted (navigated to the same route, or to a different route before current navigation has finished), respectively.

#### `router.replace(location, onComplete?, onAbort?)`

It acts like `router.push`, the only difference is that it navigates without pushing a new history entry, as its name suggests - it replaces the current entry.

| Declarative | Programmatic |
|-------------|--------------|
| `<router-link :to="..." replace>` | `router.replace(...)` |


#### `router.go(n)`

This method takes a single integer as parameter that indicates by how many steps to go forwards or go backwards in the history stack, similar to `window.history.go(n)`.

Examples

``` js
// go forward by one record, the same as history.forward()
router.go(1)

// go back by one record, the same as history.back()
router.go(-1)

// go forward by 3 records
router.go(3)

// fails silently if there aren't that many records.
router.go(-100)
router.go(100)
```

#### History Manipulation

You may have noticed that `router.push`, `router.replace` and `router.go` are counterparts of [`window.history.pushState`, `window.history.replaceState` and `window.history.go`](https://developer.mozilla.org/en-US/docs/Web/API/History), and they do imitate the `window.history` APIs.

Therefore, if you are already familiar with [Browser History APIs](https://developer.mozilla.org/en-US/docs/Web/API/History_API), manipulating history will be super easy with kdu-router.

It is worth mentioning that kdu-router navigation methods (`push`, `replace`, `go`) work consistently in all router modes (`history`, `hash` and `abstract`).
