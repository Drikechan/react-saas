import { Spin, SpinProps } from "antd";
import "./index.less";
export const Loading = (props: SpinProps) => {
  const { spinning, tip, ...resetProps } = props;
  return (
    <Spin
      spinning={spinning || false}
      tip={tip || "Loading..."}
      {...resetProps}
      className="request-loading"
    />
  );
};
