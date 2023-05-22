import './container.css'
import iconcake from '../../image/iconcake.png'
import sanpham from '../../image/1.png'
import { Link , useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineMinus } from 'react-icons/ai';
import { useDispatch ,useSelector } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { useState } from 'react';
import { Button, Drawer , Divider , Typography} from 'antd';
import {increment} from '../../redux/counterproductslice';
import Item from 'antd/es/list/Item';
import {
	decrement,
  } from '../../redux/counterproductslice';
import { increaseQuantity , decreaseQuantity ,selectCartItems } from '../../redux/cartSlice';

const Container = () => {
	const { Paragraph, Text } = Typography;
	const [ellipsis, setEllipsis] = useState(true);
	const dispatch = useDispatch()
	const navigate = useNavigate();
    const [count, setCount] = useState(8);
	const [open, setOpen] = useState(false);

	const products = useSelector((state)=>state.productSlice.product);
    const searchResults = useSelector((state) => state.products);
	// console.log(searchResults)

	const myCart = useSelector((state)=>state.cartSlice.items);
	const cartTotal = useSelector((state) => state.cartSlice.total);
	const cartItems = useSelector(selectCartItems);
    const itemtotal = myCart.map(e => cartItems.find((item)=>item.id == e.id) )
    
	const pay = ( ) =>{
		navigate("/pay")
	 }
	const handleAddToCart = (product) => {
		dispatch(addItem(product));
		dispatch(increment())
		setOpen(true)
	  };
	const onClose = () => {
		setOpen(false);
	  };
	const handleShowMore = () => {
		setCount(count + 4);
	  }; 
	const handleIncrease = (product) => {
		dispatch(increaseQuantity(product.id));
		dispatch(increment());
	  };
	
	const handleDecrease = (product) => {
		dispatch(decreaseQuantity(product.id));
		dispatch(decrement());
	  }; 
	return ( 
     	<div className="container-chonie">
     		<div className="grid"> 
     		     <div className="page1-container-chonie">
     			     <div className="sanphambanchay">
     			     	<img src={iconcake} />
     			     	<h3>
     			     		<span >Sản phẩm bán chạy</span>
     			     	</h3>
     			     	<img src={iconcake} />
     			     </div>
     		     </div>
     		     <div className="dmspbanchay">
     		     	<div className="dmspbanchay-list">
							{products.slice(0, count).map((product) => (
								<div className="dmspbanchay-item" key={product.id}>
									<div className="dmspbanchay-item-img">
									    <Link to={`/detailproduct/${product.id}`}><img src={product.image}/></Link >
									</div>
									<div className="dmspbanchay-item-title">
									<Text
										style={ellipsis ? { width: 150 } : undefined}
										ellipsis={ellipsis ? true : false}
									>
										<Link to={`/detailproduct/${product.id}`}><div>{product.name}</div ></Link >
									</Text>
									{/* <Link to={`/detailproduct/${product.id}`}><div>{product.name}</div ></Link > */}
									</div>
									<div className="dmspbanchay-item-prince">
										<div className="dmspbanchay-item-prince-gia">
											{product.price}
										</div>
										<div onClick={()=>handleAddToCart(product)} className="dmspbanchay-item-prince-action">
											<button type="button">
											<FaShoppingCart />
											</button>
										</div>
									</div>
								</div>
							))}
     		     	</div>
					  {count < products.length && (
						<div className='Loadmore'>
							<Button 
							type="primary"
							onClick={handleShowMore}
							style={{fontSize:"16px",backgroundColor:"orange"}}
							size="large "
							>
								Xem thêm</Button>
						</div>
						)}
				</div>
				<Drawer title="Giỏ Hàng"
				        className='cart_sidebar' 
				        placement="right" onClose={onClose} open={open}>
				{itemtotal.map((item) => (
					<>			
					<div className='cart_ajaxcart'>
                        <div className='ajaxcart_iner'>
                             <div className='grid_item_img'>
								<Link to><img src={item.image} /></Link>
							 </div>
							 <div className='grid_item_name'>
								<div>
									<Link >{item.name}</Link>
									<p>{item.size}</p>
								</div>
								<div style={{display:"flex"}} >
									<div>
										<Button
											className=''
											aria-label="Decrement value"
											onClick={()=>handleDecrease(item)}
											>
											-
										</Button> 
										
										<span style={{fontSize:"14px" ,marginRight:"5px" , marginLeft:"5px"}}>{item.totalquantity}</span>
										
										<Button
											aria-label="Increment value"
											onClick={()=>handleIncrease(item)}
											>
											+
										</Button>
									</div>
									<div>
									    <p style={{marginLeft:"40px" , fontSize:"16px" , marginTop:"16px"}}>
											{ item.totalPrice.toLocaleString()}.đ
										</p>
									</div>
								</div>
								
							 </div>
						</div>
					</div>
					<Divider />
					</>
				))} 
				    <div style={{textAlign:"end"}}>
						<span>Tổng tiền : </span> 
						<span style={{fontSize:"16px" , fontWeight: "500"}}>{cartTotal.toLocaleString()}.Đ</span>
					</div>
					<div style={{textAlign:"center" , marginTop:"20px"}}>
						<Button
						style={{backgroundColor:'orange' ,fontWeight:"500" , color:"white" , width:"100%"}}
						onClick={pay}
						>Thanh toán</Button>
					</div>

				</Drawer>
				
				
     	</div>
	</div>

	 );
}
 
export default Container;