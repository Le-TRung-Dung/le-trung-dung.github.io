
import React from 'react';
import './App.css';
import Header from './component/header/header';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
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
import SugarCake from './component/typeCake/sugarCake/banhngot';



function App() {
  return(
    <Provider store={store}>
    <div>
      <BrowserRouter> 
      <ScrollToTop>
         <Header />
        
          <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='/account' element={<LoginLogout />} />
            <Route path='/register' element = {<RegisterForm />} /> 
            <Route path='/cart' element ={<ItemCart />} />
            <Route path='/pay' element ={<Pay />} />
            <Route path='/detailproduct/:id' element ={<ProductDetail />} />
            <Route path='/detailproduct/:id' element ={<Cartitem />} />
            <Route path='/sugarcake' element ={<SugarCake />} />
            
          </Routes>

          <Footer />
      </ScrollToTop>
      </BrowserRouter> 
    </div> 
    </Provider>
  )
}

export default App;