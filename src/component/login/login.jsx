import { useState , useEffect} from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/accounSlice";
import { useTranslation, withTranslation } from "react-i18next";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lấy danh sách tài khoản từ LocalStorage
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    // Kiểm tra xem tài khoản và mật khẩu có khớp hay không
    const matchedAccount = accounts.find(
      (account) =>
        account.username === username && account.password === password
    );
    if (matchedAccount) {
      alert("Đăng nhập thành công!");
      navigate('/')
      dispatch(login(true))
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác!");
    }
    // Xóa thông tin đăng nhập sau khi xử lý
    setUsername("");
    setPassword("");
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="bannerlogin">
        <div className="banneroverlay">
          <div className="bannertext">
            <h2>{t("Log in")}</h2>
          </div>
        </div>
      </div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: t("Please enter your email") }]}
        >
          <Input
            placeholder="Email"
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: t("Please enter your password") }]}
        >
          <Input.Password
            placeholder="Mật khẩu"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>{t("Remember password")}</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleLogin} htmlType="submit">
            {t("Log in")}
          </Button>
        </Form.Item>
      </Form>
      <div className="login-text">
        <p>
          <Link to="/">{t("Return")}</Link>
        </p>
        <p>
          <Link to="/register">{t("Register")}</Link>
        </p>
        <p>
          <Link to="#">{t("Forgot password")}</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
