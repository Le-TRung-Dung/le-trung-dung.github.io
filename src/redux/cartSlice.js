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
       const existingItem = state.items.find(item => item.id == newItem.id);
       if (existingItem) {
         // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
         existingItem.quantity ++ ;
       } else {
         // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào danh sách
         state.items.push({ ...newItem, quantity: 1 });
       }
       //Cập nhật tổng tiền của giỏ hàng
       state.total += newItem.price;
       
    },
    increaseQuantity(state, action) {
      const items = action.payload;
      const existingItem = state.items.find(item => item.id === items);
       existingItem.quantity++;
      state.total += existingItem.price;
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items = state.items.filter(item => item.id !== itemId);
        }
        state.total -= item.price;
    }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
      }
      state.total -= existingItem.price;
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
    totalPrice: item.quantity * item.price,
    totalquantity: item.quantity
  }));
};

export const { addItem , increaseQuantity ,decreaseQuantity , removeItem ,clearCart} = cartSlice.actions;


export default cartSlice.reducer;
