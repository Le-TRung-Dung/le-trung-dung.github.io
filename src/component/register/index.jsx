import React from "react";
import { Form, Input, Button, DatePicker, Space } from "antd";
import "./index.css";
import { registerUser, saveUserInfoToLocalStorage } from "../../auth";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation, withTranslation } from "react-i18next";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../APIslice/apiAdminSlice";

const RegistrationForm = () => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [sex, setSex] = useState("");
  const [gmail, setGmail] = useState("");
  const [numberphone, setNumberphone] = useState("");
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [registerUser,data] = useRegisterMutation(
    {
      fixedCacheKey: 'shared-update-post',
    }
  );

  const checkExistingAccount = (username) => {
    const existingAccounts = localStorage.getItem('accounts');
    if (existingAccounts) {
      const parsedAccounts = JSON.parse(existingAccounts);
      
      if (parsedAccounts.includes(username)) {
        return true; // Tài khoản đã tồn tại
      }
    }
    return false; // Tài khoản không tồn tại
  }

  const handleSignUp = (e) => {
    if (!username || !date || !sex || !gmail || !numberphone || !account || !password) {
      alert("Hãy điền đầy đủ thông tin")
      return;
    } else {
    registerUser({
      listjson_nguoidung: [
        {
          hoten: username,
          ngaySinh: date, //"1992-03-20"
          gioiTinh: sex,
          email: gmail,
          dienThoai: numberphone,
          trangThai: true,
        },
      ],
      taiKhoan: account,
      matKhau: password,
      trangThai: true,
      loaiQuyen: "admin",
    })
    }
    const existingAccounts = localStorage.getItem('accounts');
    console.log(existingAccounts)
      if (existingAccounts) {
        const parsedAccounts = JSON.parse(existingAccounts)
        console.log(parsedAccounts)
        const foundAccount = parsedAccounts['email'] === account && parsedAccounts['password'] === password
        console.log(foundAccount)  
        if (foundAccount) {
          alert("Tài khoản đã tồn tại trong LocalStorage");
          return;
        }
      }
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
      <Form onFinish={handleSignUp}>
        <Form.Item rules={[{ required: true }]}>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Họ và tên"
          />
        </Form.Item>
        <Form.Item rules={[{ required: true }]}>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Ngày sinh"
          />
        </Form.Item>
        <Form.Item rules={[{ required: true }]}>
          <Input
            type="text"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            placeholder="Giới tính"
          />
        </Form.Item>
        <Form.Item rules={[{ required: true }]}>
          <Input
            type="gmail"
            value={gmail}
            onChange={(e) => setGmail(e.target.value)}
            placeholder="Gmail"
          />
        </Form.Item>
        <Form.Item rules={[{ required: true }]}>
          <Input
            type="text"
            value={numberphone}
            onChange={(e) => setNumberphone(e.target.value)}
            placeholder="Số điện thoại"
          />
        </Form.Item>
        <Form.Item rules={[{ required: true }]}>
          <Input
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            placeholder="Tài khoản"
          />
        </Form.Item>
        <Form.Item rules={[{ required: true }]}>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
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
