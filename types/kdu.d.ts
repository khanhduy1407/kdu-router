/**
 * Augment the typings of Kdu.js
 */

import Kdu = require("types/kdu");
import KduRouter = require("./index");
import { Route, RawLocation, NavigationGuard } from "./index";

declare module "kdu/types/kdu" {
  interface Kdu {
    $router: KduRouter;
    $route: Route;
  }
}

declare module "kdu/types/options" {
  interface ComponentOptions<V extends Kdu> {
    router?: KduRouter;
    beforeRouteEnter?: NavigationGuard;
    beforeRouteLeave?: NavigationGuard;
    beforeRouteUpdate?: NavigationGuard;
  }
}
