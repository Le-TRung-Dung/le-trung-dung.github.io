import React, { useState } from "react";

function ChangePassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleChangePassword() {
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const matchedAccount = accounts.find(
      (account) =>
        account.username === email
    );

    if (matchedAccount) {
      matchedAccount['password'] = newPassword; // Đặt lại mật khẩu mới trong tài khoản
      setMessage("Mật khẩu đã được thay đổi thành công.");
    } else {
      setMessage("Email không tồn tại trong hệ thống.");
    }
  }

  return (
    <>
      <div className="bannerlogin">
        <div className="banneroverlay">
          <div className="bannertext">
            <h2></h2>
          </div>
        </div>
      </div>
      <div>
        <h2>Thay đổi mật khẩu</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu mới"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button onClick={handleChangePassword}>Thay đổi mật khẩu</button>
        <p>{message}</p>
      </div>
    </>
  );
}

export default ChangePassword;
