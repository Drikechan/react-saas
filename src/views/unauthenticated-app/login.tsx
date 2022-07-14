import React from "react";
import styled from "@emotion/styled";
import "@/assets/styles/common.css";
import "./index.less";
import { Button, Form, Input, Tabs } from "antd";
import { LoginType } from "@/types/login";
const { TabPane } = Tabs;
export function Login() {
  const onChange = () => {
    console.log(1);
  };
  const handleLogin = (e: Omit<LoginType, "password">) => {
    console.log(e);
  };
  return (
    <LoginContainer>
      <LoginLayout>
        <LoginLeftLayout>
          <LoginBgImg src={require("@/assets/login/login_bg.png")} alt="" />
        </LoginLeftLayout>
        <LoginRightLayout>
          <div className="w-100 p-10">
            <LoginRightTitle>
              <LoginTitleTop>欢迎登录</LoginTitleTop>
              <LoginTitleContent>智电运营管理平台</LoginTitleContent>
            </LoginRightTitle>
            <LoginForm className="login-content">
              <Tabs
                className="login-tabs"
                defaultActiveKey="1"
                onChange={onChange}
              >
                <TabPane tab="验证码登录" key="1">
                  <Form name="verificationCode" onFinish={handleLogin}>
                    <Form.Item
                      name={"username"}
                      label={"手机号："}
                      rules={[{ required: true, message: "请输入用户名" }]}
                    >
                      <Input
                        placeholder="请输入用户名"
                        type={"text"}
                        id={"username"}
                      />
                    </Form.Item>
                    <Form.Item
                      name={"verificationCode"}
                      label={"验证码："}
                      rules={[{ required: true, message: "请输入验证码" }]}
                    >
                      <Input
                        placeholder="请输入验证码"
                        type={"text"}
                        id={"verificationCode"}
                      />
                    </Form.Item>
                    <Form.Item
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button htmlType={"submit"} type={"primary"}>
                        登录
                      </Button>
                    </Form.Item>
                  </Form>
                </TabPane>
                <TabPane tab="密码登录" key="2">
                  Content of Tab Pane 2
                </TabPane>
              </Tabs>
            </LoginForm>
          </div>
        </LoginRightLayout>
      </LoginLayout>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #4090f7;
`;

const LoginLayout = styled.div`
  display: flex;
  flex-direction: row;
  height: 80%;
  width: 74%;
  background-color: #fff;
  box-shadow: 0 6px 3px 0 rgb(0 0 0 / 15%);
`;

const LoginLeftLayout = styled.div`
  width: 66%;
  height: 100%;
`;

const LoginBgImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LoginRightLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const LoginRightTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const LoginTitleTop = styled.div`
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #7e7e7e;
  line-height: 29px;
  -webkit-background-clip: text;
`;

const LoginTitleContent = styled.div`
  height: 42px;
  line-height: 42px;
  font-size: 28px;
  font-weight: 600;
  color: #333333;
`;

const LoginForm = styled.div`
  margin-top: 30px;
  min-width: 330px;
`;
