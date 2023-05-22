const users = []; // danh sách các người dùng đã đăng ký

// kiểm tra email đã tồn tại hay chưa
const isEmailExist = (email) => {
  const user = users.find(user => user.email === email);
  return user ? true : false;
};

// đăng ký tài khoản
const registerUser = (email, password) => {
  if (isEmailExist(email)) { // nếu email đã tồn tại
    return { success: false, message: 'Email đã tồn tại' };
  } else { // nếu email chưa tồn tại
    const user = { email, password };
    users.push(user); // thêm người dùng vào danh sách
    return { success: true, message: 'Đăng ký thành công' };
  }
};

// Hàm kiểm tra đăng nhập
const login = (email, password) => {
  // Tìm kiếm người dùng với email tương ứng
  const user = users.find((user) => user.email === email);
  if (!user) {
    return { success: false, message: "Tài khoản không tồn tại!" };
  }
  // Kiểm tra mật khẩu
  if (user.password !== password) {
    return { success: false, message: "Mật khẩu không chính xác!" };
  }
  // Đăng nhập thành công
  return { success: true, message: "Đăng nhập thành công!" };
};

// Hàm lưu thông tin người dùng vào local storage
const saveUserInfoToLocalStorage = (email) => {
  localStorage.setItem("user", JSON.stringify({ email }));
};

// Hàm lấy thông tin người dùng từ local storage
const getUserInfoFromLocalStorage = () => {
  const userStr = localStorage.getItem("user");
  if (userStr) {
    return JSON.parse(userStr);
  }
  return null;
};

// Hàm xóa thông tin người dùng khỏi local storage
const clearUserInfoFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export { registerUser, login, saveUserInfoToLocalStorage, getUserInfoFromLocalStorage, clearUserInfoFromLocalStorage };
