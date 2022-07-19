import React, { Suspense } from "react";
import { Spin } from "antd";
import styled from "@emotion/styled";
export const lazyLoad = (
  Comp: React.LazyExoticComponent<any>
): React.ReactNode => {
  return (
    <Suspense fallback={<LazySpin size="large" />}>
      <Comp />
    </Suspense>
  );
};

const LazySpin = styled(Spin)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
