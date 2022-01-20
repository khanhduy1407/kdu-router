import "./kdu";
import * as R from "./router";

// `KduRouter` in `export = KduRouter` must be a namespace
// All available types are exported via this namespace
declare namespace KduRouter {
  export type RouterMode = R.RouterMode;
  export type RawLocation = R.RawLocation;
  export type RedirectOption = R.RedirectOption;
  export type RouterOptions = R.RouterOptions;
  export type RouteConfig = R.RouteConfig;
  export type RouteRecord = R.RouteRecord;
  export type Location = R.Location;
  export type Route = R.Route;
  export type NavigationGuard = R.NavigationGuard;
}

// TS cannot merge imported class with namespace, declare a subclass to bypass
declare class KduRouter extends R.KduRouter {}

export = KduRouter;
