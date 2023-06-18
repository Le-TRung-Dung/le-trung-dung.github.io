import React, { useState } from 'react';

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }
  return password;
}

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Kiểm tra xem email có tồn tại trong localStorage hay không
  function isEmailExists(email) {
    const accounts = JSON.parse(localStorage.getItem('accounts'));
    return accounts.some(account => account.username === email);
  }

  // Xử lý khi người dùng gửi yêu cầu quên mật khẩu
  function handleForgotPassword() {
    if (isEmailExists(email)) {
        const newPassword = generateRandomPassword();
        
        // Lưu mật khẩu tạm thời vào localStorage
        const temporaryPassword = { email: email, password: newPassword };
        localStorage.setItem('temporaryPassword', JSON.stringify(temporaryPassword));
        
        setMessage('Mật khẩu tạm thời đã được gửi đến email của bạn.');
      } else {
        setMessage('Email không tồn tại trong hệ thống.');
      }
  }

  return (
    <>
    <div>
    <div className="bannerlogin">
        <div className="banneroverlay">
          <div className="bannertext">
            <h2>quên mật khẩu</h2>
          </div>
        </div>
      </div>
      <h2>Quên mật khẩu</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleForgotPassword}>Gửi</button>
      <p>{message}</p>
    </div>
    </>
  );
}

export default ForgotPassword