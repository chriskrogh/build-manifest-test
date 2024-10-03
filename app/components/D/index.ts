import { lazy } from "react";

export const LazyD = lazy(() =>
  import(/* webpackChunkName: "d-component" */ "./D").then((m) => ({
    default: m.D,
  }))
);
