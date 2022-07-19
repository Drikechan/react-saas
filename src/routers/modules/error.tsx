import { RouterOptionType } from "@/types/router";
import React from "react";
// import { NotFount } from "@/components/ErrorPages/404";
import { lazyLoad } from "@/utils/lazyRouters";

export const errorRouter: RouterOptionType[] = [
  {
    path: "404",
    element: lazyLoad(React.lazy(() => import("@/components/ErrorPages/404"))),
  },
];
