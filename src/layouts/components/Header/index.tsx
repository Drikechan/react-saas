import { Layout } from "antd";
import AssemblySize from "./components/AssemblySize";
import CollapseIcon from "./components/CollapseIcon";
import "./index.less";
export function LayoutHeader() {
  const { Header } = Layout;
  return (
    <Header>
      <div className="header-lf">
        <CollapseIcon />
      </div>
      <div className="header-ri">
        <AssemblySize />
      </div>
    </Header>
  );
}
