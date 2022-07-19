import { HOME_URL, LOGIN_URL } from "@/config/config";
import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFount: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => {
    const token = window.sessionStorage.getItem("token");
    navigate(token ? HOME_URL : LOGIN_URL);
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={goHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default NotFount;
