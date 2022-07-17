import styled from "@emotion/styled";
import { Spin } from "antd";
import React from "react";
const FullPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SpinType extends React.ComponentProps<typeof Spin> {
  spinning: boolean;
}

export const FullPageLoading = (props: SpinType) => {
  return (
    <FullPage>
      <Spin tip="Loading..." size={"large"} spinning={props.spinning} />
    </FullPage>
  );
};
