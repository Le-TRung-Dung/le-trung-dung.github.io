import React from 'react';
import './cart.css'
import { Link , useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { Button, Space } from 'antd';
import { useState } from 'react';
import { increaseQuantity , decreaseQuantity , removeItem , selectCartItems} from '../../redux/cartSlice';
import {
  decrement,
  increment,
  selectCount,
} from '../../redux/counterproductslice';



const Cartitem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myCart = useSelector((state)=>state.cartSlice.items);

   const cartTotal = useSelector((state) => state.cartSlice.total);

  const cartItems = useSelector(selectCartItems);
  
  const itemtotal = myCart.map(e => cartItems.find((item)=>item.id == e.id) )
  
  const handleIncrease = (product) => {
    dispatch(increaseQuantity(product.id));
    dispatch(increment());
  };

  const handleDecrease = (product) => {
    dispatch(decreaseQuantity(product.id));
    dispatch(decrement());
  };

  const handleRemove = (product) => {
    dispatch(removeItem(product.id));
    dispatch(decrement())
  };

  const handleContinueShopping = ( ) =>{
     navigate("/")
  }

  const pay = ( ) =>{
    navigate("/pay")
 }


  return (
    <>
    <div className="bannerlogin">
     		<div className="banneroverlay">
     			<div className="bannertext">
     				<h2>Giỏ hàng của bạn</h2>
     			</div>
     		</div>
    </div>
    <div className="grid"> 
      <div className='cart'> 
            <h1>Giỏ Hàng</h1>
      </div>
        <table className='table_cart'>
          <thead className='thead'>
            <tr className='tr_thead'>
              <th colSpan={3} className='th_info_product'>thông tin sản phẩm</th>
              <th className='th_info_product'>đơn giá</th>
              <th className='th_info_product'>số lượng</th>
              <th className='th_info_product'>tổng giá</th>
            </tr>
          </thead>
        </table>
    </div>
    {myCart.length === 0 ? (
      <div className='Cart_empty'>
        <div className='cart_empty_item'>
        Giỏ hàng trống
        </div>
      </div>):(
    <div>
      {itemtotal.map((item) => (
        <div key={item.id}> 
           <div className='container'>
             <div className="grid"> 
              <div className='page-wrapper'>
                <div className='wrapper'>
                  <div className='inner'>
                    <form>
                      <table className='table_cart'>
                        <tbody>
                          <tr className='tr_cart'>
                            <td className='td_img_product'>
                              <Link to>
                                <img src={item.image} />
                              </Link>
                            </td>
                            <td className='td_name_prodct'>
                              <Link to={`/detailproduct/${item.id}`}>
                                {item.name}
                              </Link>
                                <br />
                                <small>{item.size}</small>
                                <br/>
                                <Button onClick={()=>handleRemove(item)}>Xóa</Button>
                            </td>
                            <td className='td_price'>
                              <span>{item.price.toLocaleString()}</span>
                            </td>
                            <td className='td_amount'>
                              <div >
                                <Button
                                    aria-label="Decrement value"
                                    onClick={()=>handleDecrease(item)}
                                    >
                                    -
                                </Button> 
                                
                                <span className='total_price'>{item.totalquantity}</span>
                                
                                <Button
                                    aria-label="Increment value"
                                    onClick={()=>handleIncrease(item)}
                                    >
                                    +
                                </Button>
                              </div>
                            </td> 
                            <td className='td_total'>
                              <span>{ item.totalPrice.toLocaleString()}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>

             </div>
           </div>
        </div>   
      ))} 
    </div>
        )}
    <div className='Total'>
      <div>
       <span className='total_order'>Tổng đơn hàng :</span> 
      <span className='total_price_end'> {cartTotal.toLocaleString()}<span>đ</span></span> 
      </div>
    </div>
   {cartTotal > 0 ? (
    <div className='pay'>
      <Button 
      style={{backgroundColor:'orange' , fontSize:"16px" ,fontWeight:"500" , color:"white"}}
      size="large "
      onClick={pay}>
        Thanh toán
      </Button>
    </div> ):
    (<div className='continueShopping'>
      <Button
      style={{backgroundColor:'orange' , fontSize:"16px" ,fontWeight:"500" , color:"white"}}
      size="large "
      onClick={handleContinueShopping}
      >Tiếp tục mua hàng</Button>
    </div>)
    }
    </>
          );
        };

export default Cartitem;