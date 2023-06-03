import React from "react";
import { Form, Input, Button } from "antd";
import "./index.css";
import { registerUser, saveUserInfoToLocalStorage } from "../../auth";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation, withTranslation } from "react-i18next";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const RegistrationForm = () => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    // Kiểm tra nếu đã có tài khoản trong LocalStorage
    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    // Kiểm tra xem tài khoản đã tồn tại chưa
    const existingAccount = existingAccounts.find(
      (account) => account.username === username
    );
    if (existingAccount) {
      alert("Tài khoản đã tồn tại!");
      return;
    }
    // Tạo tài khoản mới
    const newAccount = {
      username: username,
      password: password,
    };
    // Lưu tài khoản mới vào LocalStorage
    existingAccounts.push(newAccount);
    localStorage.setItem("accounts", JSON.stringify(existingAccounts));
    // Xóa thông tin đăng ký sau khi lưu thành công
    setUsername("");
    setPassword("");
    alert("Đăng ký thành công!");
    navigate('/account')
  };
  
  return (
    <>
      <div className="bannerlogin">
        <div className="banneroverlay">
          <div className="bannertext">
            <h2>{t("Register")}</h2>
          </div>
        </div>
      </div>
      <Form name="register" scrollToFirstError autoComplete="off">
        <Form.Item
          name="emailRegister"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Bạn chưa nhập gmail",
            },
          ]}
        >
          <Input
            placeholder="Nhập gmail của bạn"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="off"
          />
        </Form.Item>

        <Form.Item
          name="passwordRegister"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập mật khẩu!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Nhập mật khẩu của bạn"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleSignUp}>
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
      <div class="login-text">
        <p>
          <Link to="/account">Trở về</Link>
        </p>
      </div>
    </>
  );
};

export default RegistrationForm;
