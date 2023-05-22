import "./pay.css"
import { useSelector  , useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Checkbox, Form, Input, Radio, Table ,useForm , Breadcrumb} from 'antd';
import { selectCartItems , clearCart } from "../../redux/cartSlice";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { remove } from "../../redux/counterproductslice";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { isFulfilled } from "@reduxjs/toolkit";



const Pay = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState(true);
    const [isOrdered, setIsOrdered] = useState(true);
    const [orderNumber, setOrderNumber] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);

    const myCart = useSelector((state)=>state.cartSlice.items);
    
    const cartItems = useSelector(selectCartItems);
    
    const itemtotal = myCart.map(e => cartItems.find((item)=>item.id == e.id) )

    const cartTotal = useSelector((state) => state.cartSlice.total);
    
     const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    } 

    const handleaddressChange = (e) => {
          setAddress(e.target.value);
    }
    
    const handleRadioChange = (e) => {
        setSelectedValue(e.target.value);
    }
    
    const handleSubmit = () => {
        if(!name || !phoneNumber || !address  ){
            return;
        }
        else{    
        setIsOrdered(false);
        const newOrderNumber = Math.floor(Math.random() * 100000000);
        setOrderNumber(newOrderNumber);
        }
        // const phoneNumberRegex = /^\d{10}$/; // Biểu thức chính quy để kiểm tra số điện thoại có 10 chữ số
        //    if (phoneNumber.match(phoneNumberRegex)) {
        //      console.log('Số điện thoại hợp lệ');
        //     setError(false); // Xóa thông báo lỗi (nếu có)
        //      } else {
        //      console.log('Số điện thoại không hợp lệ');
        //      setError('Số điện thoại không hợp lệ'); // Đặt thông báo lỗi
        //  }
      };
    const success = () => {
        dispatch(clearCart())
        dispatch(remove())
        navigate("/")
    }

    return ( 
        <>
        <div>
            <div className="bannerlogin">
     		    <div className="banneroverlay">
     			    <div className="bannertext">
     				    <h2>Thanh toán</h2>
     			    </div>
     		    </div>
            </div>
        </div>
        <div className="wrap">
            <div className="grid_pay">
                <div className="main">
                    <Breadcrumb
                        items={[
                        {
                            
                            title: <HomeOutlined />,
                        },
                        {
                            
                            title: (
                            <>
                                <span>Giỏ hàng</span>
                            </>
                            ),
                        },
                        {
                            title: 'Thanh toán đơn hàng',
                        },
                        ]}
                    />
                    <div className="main_header">
                         <Link to={"/"}>
                            <h1 className="main_header_text">Chonie.Cake</h1>                 
                        </Link>
                    </div>
                    {  isOrdered && error ? (
                    <div className="main-content">
                        <div className="Step">

                            <div className="step_info">
                                <h2>Thông tin thanh toán</h2>
                            </div>
                            <div className="step_pay">
                            <Form
                                name="info"
                                onFinish={handleSubmit}
                            >
                                <Form.Item
                                    name="username"                                  
                                    rules={[{ required: true, message: 'Nhập họ và tên của bạn!' }]}
                                    style={{width:"100%"}}
                                    >
                                    <Input value={name} onChange={handleNameChange} placeholder="Họ và tên" />
                                </Form.Item>
                                <Form.Item
                                    name="numberphone" 
                                    value={phoneNumber}                                 
                                    rules={[{ required: true, message: 'Nhập số điện thoại của bạn!' }]}
                                    style={{width:"100%"}}
                                    onChange={handlePhoneChange}
                                    >  
                                        <Input placeholder="Số điện thoại"/>
                                </Form.Item>
                                <Form.Item
                                    name="address"                                  
                                    rules={[{ required: true, message: 'Nhập địa chỉ của bạn!' }]}
                                    style={{width:"100%"}}
                                    >
                                    <Input value={address} onChange={handleaddressChange} placeholder="Địa chỉ" />
                                </Form.Item>
                                <div>
                                    <p style={{fontSize:"20px"}}>Hình thức thanh toán</p>
                                </div>
                                <Form.Item value={selectedValue} onChange={handleRadioChange}>
                                    <Radio style={{marginRight:"100px" , fontSize:"16px"}} value={"Thanh toán khi nhận hàng (COD)"}>
                                        Thanh toán khi nhận hàng (COD)
                                    </Radio>
                                </Form.Item>
                                <Form.Item >
                                    <Button 
                                    type="primary"
                                    htmlType="submit" 
                                    onClick={handleSubmit}>
                                         Thanh toán đơn hàng
                                    </Button>
                                    {error && <p>{error}</p>} 
                                </Form.Item>
                            </Form>
                            </div>
                        </div>
                    </div>
                    ):(
                        <div className="Step">
                            <div className="step_sucess" style={{marginTop:"20px"}}>
                               <div className="icon_success">
                                   <AiOutlineCheckCircle color="#74c0fc" fontSize={"61px"}/> 
                               </div>
                               <div className="success_list">
                                   <div>
                                       <h1 style={{fontSize:"22px" , fontWeight: "500"}}>Đặt hàng thành công</h1>
                                   </div>
                                   <div>
                                       Mã đơn hàng : {orderNumber}
                                   </div>
                                   <div>
                                       <p>Cảm ơn quý khách đã mua hàng!</p>
                                   </div>
                               </div>
                            </div>
                            <div className="section-content">
                                <div className="content-box">
                                     <div>
                                         <p style={{fontSize:"18px" , color:"#000"}}>Thông tin đơn hàng</p>
                                     </div>
                                     <div>
                                         <p style={{fontSize:"16px" , color:"#000"}}>Thông tin vận chuyển</p>
                                         <p>{name}</p>
                                         <p>{phoneNumber}</p>
                                         <p>{address}</p>
                                         <p style={{ color:"#000"}}>Phương thức thanh toán</p>
                                         <p>{selectedValue}</p>
                                         <p 
                                            style={{fontSize:"16px" , color:"#000"}}>
                                            Tông giá trị đơn hàng : {cartTotal.toLocaleString()}đ
                                         </p>
                                     </div>
                                </div>
                            </div>
                            <div className="buy_success">
                                <div>
                                    <Button
                                     style={{backgroundColor: "#ffa500", color:"#ffffff",height: "40px" , width: "220px"}}
                                     onClick={success}>Tiếp tục mua hàng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )} 
                </div> 
                <div className="sidebar" >
                    <div className="Sidebar-content">
                        <div className="sidebar_table" style={{marginBottom:"30px"}}>
                        {itemtotal.map((item) => (    
                            <table className="product_table" key={item.id}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="product">
                                        <td className="product_imge">
                                            <div className="product-thumbnail">
                                                <div className="product-thumbnail-wrapper"><img src={item.image}></img></div>
                                                <div className="product-thumbnail-quantity">{item.quantity}</div>
                                            </div>
                                        </td>
                                        <td className="product-description">
                                            <div className="product_name">{item.name}</div>
                                            <div className="product_size">{item.size}</div>
                                        </td>
                                        <td style={{paddingLeft:"100px", fontSize:"large"}}>
                                            {item.totalPrice.toLocaleString()}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        ))}
                        </div>
                    </div>
                    <div className="remove_cart">
                      <p>Tổng tiền : {cartTotal.toLocaleString()}đ</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Pay;
