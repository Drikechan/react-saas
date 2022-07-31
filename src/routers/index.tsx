import { RouterOptionType } from "@/types/router";
import { UnauthenticatedApp } from "@/views/unauthenticated-app";
import { Navigate, useRoutes } from "react-router-dom";
// 导入所有路由
const childRoutes = ((r) =>
  r.keys().map((key) => r(key)[Object.keys(r(key))[0]]))(
  require.context("./modules", true, /\.tsx$/)
);
const metaRouters = childRoutes.flat(Infinity);

export const rootRouter: RouterOptionType[] = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  ...metaRouters,
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
