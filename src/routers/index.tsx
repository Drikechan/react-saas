import { RouterOptionType } from "@/types/router";
import { UnauthenticatedApp } from "@/views/unauthenticated-app";
import { Navigate, useRoutes } from "react-router-dom";

// 导入所有路由
// const metaRouters = require.context("@/routers/modules", false, /\.tsx$/);

export const rootRouter: RouterOptionType[] = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
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
