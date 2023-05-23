import './header.css'
import logochonie from '../../image/chon.png';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import React, { useState , useEffect } from 'react';
import Login from '../login/login';
import  { login }from "../../redux/accounSlice";
import { useSelector, useDispatch } from 'react-redux'
import { selectCount } from '../../redux/counterproductslice';
import { searchProducts } from '../../redux/productSlice';
import Container from '../container/container';
import { useTranslation ,  withTranslation } from 'react-i18next';


function Header() {
  const { t, i18n } = useTranslation();
  const isLoggin = useSelector((state)=>state.accounSlice.isLoggin);
  const count = useSelector(selectCount);
  const products = useSelector((state)=>state.productSlice.product);
  const dispatch = useDispatch()
  const [item, setitem] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  // useEffect(() => {
  //   const results = products.filter(person =>
  //     person.name.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchProducts(searchTerm));
  };

  const handleLogout = () => {
    dispatch(login(false))
  };


  return (
    <div className="header-chonie">
      <div className="grid">
        <div className="to-nav-header-chonie">
          <div className="logo-header-chonie">
            <Link to="/">
              <img src={logochonie} alt="Chonie Logo" />
            </Link>
          </div>
          <div className="nav-header-chonie">
            <div className="phantu-header-chonie">
              <Link to="/"> {t('Home page')}</Link>
            </div>
            <div className="phantu-header-chonie">
              <Link to="/sanpham">{t('Product')}</Link>
              <ul className="sanpham-tonghop-header">
                <li className="sanpham-tonghop-header-tem">
                  <Link to="/sugarcake">Bánh ngọt</Link>
                </li>
                <li className="sanpham-tonghop-header-tem">
                  <a href="">Bánh trung thu</a>
                </li>
                <li className="sanpham-tonghop-header-tem">
                  <a href="">Bánh kem dừa</a>
                </li>
                <li className="sanpham-tonghop-header-tem">
                  <a href="">Bánh quế</a>
                </li>
              </ul>
            </div>
            <div className="phantu-header-chonie">
              <Link to="/tintuc&khuyenmai">Tin tức & Khuyến mại</Link>
            </div>
            <div className="phantu-header-chonie">
              <Link to="/lienhe">Liên hệ</Link>
            </div>
            <div className="timkiem-header-chonie">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Tìm kiếm"
                onChange={handleInputChange}
                value={searchTerm}
                className="myinput"
               />
              <button type="submit" className="searchbutton"><BsSearch /></button>
            </form>
            </div>
            <div className="giohang-header-chonie">
              <div className="giohang-header-chonie-item">
                <Link to="/cart">
                  <FaShoppingCart />
                </Link>
              </div>
              <div className="cart-mount">
                <span id="cart-mount">{count}</span>
              </div>
            </div>
            <div className="taikhoan-header-chonie">
              <div className="giohang-header-chonie-item user">
                {isLoggin ? (
                  <button className='buttonlogin' onClick={handleLogout}>Đăng xuất</button>
                  ) : (
                    <Link to="/account">
                      <BiUserCircle />
                    </Link> 
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Header);
