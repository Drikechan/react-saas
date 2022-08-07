import React from "react";
import { Layout } from "antd";
import "./index.less";
import { LayoutMenu } from "./components/Menu/index";
import { Outlet } from "react-router-dom";
interface LayoutType extends React.ComponentProps<typeof Layout> {
  isCollapsed?: boolean;
}
export const LayoutIndex = (props: LayoutType) => {
  const { Sider, Content } = Layout;
  return (
    <section className="container">
      <Sider trigger={null} collapsed={props.isCollapsed}>
        <LayoutMenu />
      </Sider>
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </section>
  );
};
