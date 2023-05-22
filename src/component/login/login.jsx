import useState from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {  useDispatch , useSelector } from 'react-redux';
import  { login }from "../../redux/accounSlice";

const accounts = [
  { email: 'dung@gmail.com', password: '12345' },
  { email: 'user@example.com', password: 'password' }
];

const Login = () => {
  const dispatch = useDispatch()
  

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
     				<h2>đăng nhập</h2>
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
        rules={[{ required: true, message: 'Vui lòng nhập email của bạn!' }]}
      >
        <Input placeholder='Email' />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Vui lòn nhập mật khẩu của bạn!' }]}
      >
        <Input.Password placeholder='Mật khẩu' />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Nhớ mật khẩu</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
    <div className="login-text">
			<p><Link to="/">Trở về</Link></p>
			<p><Link to="/register">Đăng ký</Link></p>
			<p><Link to='#'>Quên mật khẩu?</Link></p>
		</div>
    </>
  );
};

export default Login;
