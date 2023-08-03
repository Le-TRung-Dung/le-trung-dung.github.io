
import React from 'react';
import './App.css';
import Header from './component/header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout';
import Footer from './component/footer/footer';
import LoginLogout from './layout/loginlogout';
import ScrollToTop from './ScrollToTop';
import RegisterForm from './layout/RegisterForm';
import ItemCart from './layout/cart';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import ProductDetail from './component/detailProduct/detailproduct';
import Cartitem from './component/cart/cart';
import Pay from './component/pay/pay';
import Apple from './component/typeCake/sugarCake/banhngot';
import Regulation from './component/policy/regulation/regulation';
import Payment from './component/policy/payment/payment';
import ForgotPassword from './component/forgotPassword/forgotPassword';
import Samsung from './component/typeCake/sugarCake/samsung';
import Oppo from './component/typeCake/sugarCake/oppo';
import Xiaomi from './component/typeCake/sugarCake/xiaomi';
import ChangePassword from './component/forgotPassword/changePassword';
import SearchProduct from './component/search/search';
import './i18next'


function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <ScrollToTop>
            <Header />

            <Routes>
              <Route path='/' element={<Layout />} />
              <Route exact path='/account' element={<LoginLogout />} />
              <Route path='/register' element={<RegisterForm />} />
              <Route path='/cart' element={<ItemCart />} />
              <Route path='/pay' element={<Pay />} />
              <Route path='/detailproduct/:maSanpham' element={<ProductDetail />} />
              <Route path='/detailproduct/:maSanPham' element={<Cartitem />} />
              <Route path='/apple' element={<Apple />} />
              <Route path='/samsung' element={<Samsung />} />
              <Route path='/regulations' element={<Regulation />} />
              <Route path='/payment' element={<Payment />} />
              <Route path='/forgotpassword' element={<ForgotPassword />} />
              <Route path='/changepassword' element={<ChangePassword />} />
              <Route path='/oppo' element={<Oppo />} />
              <Route path='/xiaomi' element={<Xiaomi />} />
              <Route path='/search' element={<SearchProduct />} />
              
              

            </Routes>

            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App;
