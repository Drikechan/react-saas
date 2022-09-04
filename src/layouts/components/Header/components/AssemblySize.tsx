import { Dropdown, Menu } from "antd";
import { setAssemblySize } from "@/store/modules/global/action";
import { connect } from "react-redux";

function AssemblySize(props: any) {
  const { assemblySize, setAssemblySize } = props;

  const onClick = (e) => {
    setAssemblySize(e.key);
  };
  const menu = (
    <Menu
      items={[
        {
          key: "middle",
          disabled: assemblySize === "middle",
          label: "默认",
          onClick,
        },
        {
          key: "small",
          disabled: assemblySize === "small",
          label: "小型",
          onClick,
        },
        {
          key: "large",
          disabled: assemblySize === "large",
          label: "大型",
          onClick,
        },
      ]}
    ></Menu>
  );
  return (
    <Dropdown
      overlay={menu}
      placement="bottom"
      trigger={["click"]}
      arrow={true}
    >
      <i className="icon-style iconfont icon-contentright"></i>
    </Dropdown>
  );
}

const mapStateToProps = (state) => state.global;
const mapDispatchToProps = { setAssemblySize };
export default connect(mapStateToProps, mapDispatchToProps)(AssemblySize);
