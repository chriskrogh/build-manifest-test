"use client";

import { Suspense } from "react";
import { B } from "./B";
import { C } from "./C";
import { LazyD } from "./D";

export function A() {
  return (
    <>
      <B />
      <C />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyD />
      </Suspense>
    </>
  );
}
