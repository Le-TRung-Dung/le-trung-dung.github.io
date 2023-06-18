import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState:{
    items:[],
    total:0,
  },
  reducers: {
    addItem: (state, action) => {
         //Thêm sản phẩm vào giỏ hàng
       const newItem = action.payload;
       const existingItem = state.items.find(item => item.maSanPham == newItem.maSanPham);
       if (existingItem) {
         // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
         existingItem.quantity ++ ;
       } else {
         // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào danh sách
         state.items.push({ ...newItem, quantity: 1 });
       }
       //Cập nhật tổng tiền của giỏ hàng
       state.total += newItem.gia;
       
    },
    increaseQuantity(state, action) {
      const items = action.payload;
      const existingItem = state.items.find(item => item.maSanPham == items);
       existingItem.quantity++;
      state.total += existingItem.gia;
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find(item => item.maSanPham === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter(item => item.maSanPham !== itemId);
        }
        state.total -= item.gia;
    }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.maSanPham === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.maSanPham !== id);
      } else {
        existingItem.quantity--;
      }
      state.total -= existingItem.gia;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  }
});

export const selectCartItems = state => {
  const cartItems = state.cartSlice.items;
  return cartItems.map(item => ({
    ...item,
    totalPrice: item.quantity * item.gia,
    totalquantity: item.quantity
  }));
};

export const { addItem , increaseQuantity ,decreaseQuantity , removeItem ,clearCart} = cartSlice.actions;


export default cartSlice.reducer;
