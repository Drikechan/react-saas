import { Layout } from "antd";
import CollapseIcon from "./components/CollapseIcon";
import "./index.less";
export function LayoutHeader() {
  const { Header } = Layout;
  return (
    <Header>
      <div className="header-lf">
        <CollapseIcon />
      </div>
    </Header>
  );
}
