import './header.css'
import logochonie from '../../image/logochinhpng.png';
import { Input , Dropdown, Space , Menu , Select , Button} from 'antd';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import React, { useState , useEffect } from 'react';
import { useSearchProductMutation } from '../../APIslice/apiSlice';
import Login from '../login/login';
import  { login }from "../../redux/accounSlice";
import { useSelector, useDispatch } from 'react-redux'
import { selectCount } from '../../redux/counterproductslice';
import { useTranslation ,  withTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { Option } = Select;
  const { t, i18n } = useTranslation();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const count = useSelector(selectCount);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('');
  const[searchProduct, result]= useSearchProductMutation(
    {
      fixedCacheKey: 'share-product-search',
    }
  );

  useEffect(() => {
    // Kiểm tra xem có tồn tại authToken trong localStorage hay không
    const storedAuthToken = localStorage.getItem('authToken');
    if (storedAuthToken=== undefined) {
      setLoggedIn(false); // Hiển thị logo nếu authToken có tồn tại
    } else {
      setLoggedIn(true); // Ẩn logo nếu authToken không tồn tại
    }
  }, [])

  const items = Menu['items'] = [
    {
      key: '1',
      label: (
        <a rel="noopener noreferrer" href="/apple">
          Apple
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a rel="noopener noreferrer" href="/samsung">
          Samsung
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a rel="noopener noreferrer" href="oppo">
          Oppo
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a rel="noopener noreferrer" href="xiaomi">
          Xiaomi
        </a>
      ),
    },
  ];
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleChangeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchProduct({
        "pageIndex": 1,
        "pageSize": 10,
        "productName": searchTerm
    })
    navigate('/search')
    setSearchTerm("")
  };

  const handleLogout = () => {
    setLoggedIn(false)
    navigate("/account")
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
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    {t('Product')}
                  </Space>
                </a>
              </Dropdown>
            </div>
            <div className="phantu-header-chonie">
              <Link to="/tintuc&khuyenmai">{t('News and promotions')}</Link>
            </div>
            <div className="phantu-header-chonie">
              <Link to="/lienhe">{t('Contact')}</Link>
            </div>
            <div>
              <Select
                defaultValue="Language"
                onChange={handleChangeLanguage}
                options={[
                  { value: 'en', label: 'English' },
                  { value: 'vn', label: 'Tiếng Việt' },
                ]}
              />
            </div>
            <div className="timkiem-header-chonie">
            <form>
              <input
                type="text"
                placeholder={t("Search")}
                onChange={handleInputChange}
                value={searchTerm}
                className="myinput"
               />
              <button type="submit" onClick={handleSearch} className="searchbutton"><BsSearch /></button>
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
                {isLoggedIn ? (
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
