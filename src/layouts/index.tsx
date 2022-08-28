import React from "react";
import { Layout } from "antd";
import "./index.less";
import { LayoutMenu } from "./components/Menu/index";
import { Outlet } from "react-router-dom";
import { LayoutHeader } from "./components/Header";
import { updateCollapse } from "@/store/modules/menu/action";
import { connect } from "react-redux";
interface LayoutType extends React.ComponentProps<typeof Layout> {
  isCollapse?: boolean;
}
const LayoutIndex = (props: LayoutType) => {
  const { Sider, Content } = Layout;
  const { isCollapse } = props;
  return (
    <section className="container-app">
      <Sider trigger={null} collapsed={isCollapse}>
        <LayoutMenu />
      </Sider>
      <Layout>
        <LayoutHeader />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </section>
  );
};

const mapStateToProps = (state) => state.menu;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex);
