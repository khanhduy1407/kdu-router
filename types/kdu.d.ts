/**
 * Augment the typings of Kdu.js
 */

import Kdu from 'kdu'
import KduRouter, { Route, RawLocation, NavigationGuard } from './index'

declare module 'kdu/types/kdu' {
  interface Kdu {
    $router: KduRouter
    $route: Route
  }
}

declare module 'kdu/types/options' {
  interface ComponentOptions<V extends Kdu> {
    router?: KduRouter
    beforeRouteEnter?: NavigationGuard<V>
    beforeRouteLeave?: NavigationGuard<V>
    beforeRouteUpdate?: NavigationGuard<V>
  }
}
