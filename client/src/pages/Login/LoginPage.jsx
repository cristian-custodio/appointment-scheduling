import "./LoginPage.css";
import React from "react";
import Login from "../../components/LoginUser";

const LoginPage = (props) => {
  return (
    <div>
      <Login {...props} />
    </div>
  );
};

export default LoginPage;
