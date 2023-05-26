import useState from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {  useDispatch , useSelector } from 'react-redux';
import  { login }from "../../redux/accounSlice";
import { useTranslation, withTranslation } from "react-i18next";


const accounts = [
  { email: 'dung@gmail.com', password: '12345' },
  { email: 'user@example.com', password: 'password' }
];

const Login = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();

  const onFinish = (values) => {
    console.log('Success:', values);
    const account = accounts.find((acc) => acc.email === values.email && acc.password === values.password);
    if (account) {
      dispatch(login(true))
      navigate('/');
    } else {
      alert('Tài khoản hoặc mật khẩu sai');
    }
  };
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: t('Please enter your email') }]}
      >
        <Input placeholder='Email' />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: t('Please enter your password') }]}
      >
        <Input.Password placeholder='Mật khẩu' />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>{t("Remember password")}</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {t("Log in")}
        </Button>
      </Form.Item>
    </Form>
    <div className="login-text">
			<p><Link to="/">{t("Return")}</Link></p>
			<p><Link to="/register">{t("Register")}</Link></p>
			<p><Link to='#'>{t("Forgot password")}</Link></p>
		</div>
    </>
  );
};

export default Login;
