import { useState , useEffect} from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/accounSlice";
import { useTranslation, withTranslation } from "react-i18next";
import { useLoginMutation } from "../../APIslice/apiAdminSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const[login,infomation]= useLoginMutation(
    {
      fixedCacheKey: 'share-product-search',
    }
  );

  const handleLogin = () => {
    login({
      "userName": username,
      "passWord": password
    })
    const authToken = infomation?.data?.maNguoiDung
    localStorage.setItem('authToken', authToken);
    if(infomation?.status == "fulfilled"){
      console.log("dang nhap thanh cong")
    }
    else{
      console.log("dang nhap ko thanh cong")
    }
    // navigate("/")
  }
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
      {/* <form>
        <input value={username} onChange={handlePasswordChange} />
        <input value={password} onChange={handlePasswordChange} />
        <button type="submit" onClick={handleLogin}></button>
      </form> */}
      <div className="login-text">
        <p>
          <Link to="/">{t("Return")}</Link>
        </p>
        <p>
          <Link to="/register">{t("Register")}</Link>
        </p>
        <p>
          <Link to="/forgotpassword">{t("Forgot password")}</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
