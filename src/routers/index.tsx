import { RouterOptionType } from "@/types/router";
import { UnauthenticatedApp } from "@/views/unauthenticated-app";
import { Navigate, useRoutes } from "react-router-dom";
import { homeRouter } from "./modules/home";
import { errorRouter } from "./modules/error";
// 导入所有路由
// const metaRouters = require.context("@/routers/modules", false, /\.tsx$/);

export const rootRouter: RouterOptionType[] = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  ...homeRouter,
  ...errorRouter,
  {
    path: "/login",
    element: <UnauthenticatedApp />,
    meta: {
      title: "登录",
    },
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

const Router = () => {
  const routes = useRoutes(rootRouter);
  return routes;
};

export default Router;
