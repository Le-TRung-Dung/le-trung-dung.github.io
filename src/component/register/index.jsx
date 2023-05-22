import React from 'react';
import { Form, Input, Button } from 'antd';
import './index.css'
import { registerUser, saveUserInfoToLocalStorage } from '../../auth';
import { Link } from 'react-router-dom';


// xử lý sự kiện đăng ký
const onFinish = async (values) => {
    const { email, password } = values;
    const result = await registerUser(email, password);
    if (result.success) {
      saveUserInfoToLocalStorage(email); // lưu thông tin người dùng vào local storage
      alert(result.message);
      window.location.href = "/account"; // chuyển hướng đến trang đăng nhập
    } else {
      alert(result.message);
    }
  };

  const handleButtonClick = () => {
    // const onFinish = (values) => {
    //     const { email, password } = values;
    //     // xử lý đăng nhập ở đây
    //   };
  };
  


const RegistrationForm = () => {
  return (
    <>
    <div className="bannerlogin">
     		<div className="banneroverlay">
     			<div className="bannertext">
     				<h2>đăng ký</h2>
     			</div>
     		</div>
    </div>
    <Form
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Bạn chưa nhập gmail',
          },
        ]}
      >
        <Input placeholder='Nhập gmail của bạn' />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Bạn chưa nhập mật khẩu!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder='Nhập mật khẩu của bạn'/>
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Bạn chưa nhập lại mật khẩu!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Mật khẩu không trùng khớp!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder='Nhập lại mật khẩu của bạn'/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={handleButtonClick} >
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
    <div class="login-text">
     	<p><Link to="/account">Trở về</Link></p>
    </div>
    </>
  );
};

export default RegistrationForm;
