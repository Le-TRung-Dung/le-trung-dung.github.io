import { createSlice } from '@reduxjs/toolkit'
import anhsethu from "../image/1.jpg"
import anhsethu2 from "../image/2.png"
import anhsethu3 from "../image/3.png"
import anhsethu4 from "../image/4.png"
import anhsethu5 from "../image/5.png"
import anhsethu6 from "../image/6.png"
import anhsethu7 from "../image/7.png"
import anhsethu8 from "../image/8.png"
import anhsethu9 from "../image/9.png"
import anhsethu10 from "../image/10.png"
import anhsethu11 from "../image/11.png"
import anhsethu12 from "../image/12.png"
import anhsethu13 from "../image/13.png"
import anhsethu14 from "../image/14.png"
import anhsethu15 from "../image/20.png"
import anhsethu16 from "../image/16.png"
const initialState = {
  searchResults: [],
  product:[
    {
      id: 1,
      name: "OPERA CHỮ NHẬT",
      price: 730000,
      image: anhsethu,
      size:"20cm x 30cm",
      describe:"BÁNH ĐƯỢC LÀM TỪ 3 LỚP GATO KẾT HỢP VỚI LỚP CREAM CHEESE , CHOCOLATE  VÀ CHANH LEO. PHỦ MẶT BÁNH 1 LỚP SỐT CARAMEN VÀ TRANG TRÍ HOA QUẢ.",
      category:"mooncake"
    },
    {
      id: 2,
      name: "CARAMEL AND CHOCOLATE CAKE MOUSSE CHỮ NHẬT",
      price: 200000,
      image: anhsethu2,
      size:"20cm x 30cm",
      describe:"Bánh làm từ 3 lớp gato socola xen giữa 3 lớp kem tươi vị socola. Phủ bên ngoài là 1 lớp sốt caramel có vị đắng nhẹ.",
      category:"mooncake"
    },
    {
      id: 3,
      name: "CARAMEL MOIST CHOCOLATE CAKE",
      price: 140000,
      image: anhsethu3,
      size:"20cm x 30cm",
      describe:"BÁNH ĐƯỢC LÀM TỪ 3 LỚP GATO KẾT HỢP VỚI LỚP CREAM CHEESE , CHOCOLATE  VÀ CHANH LEO. PHỦ MẶT BÁNH 1 LỚP SỐT CARAMEN VÀ TRANG TRÍ HOA QUẢ.",
      category:"mooncake"
    },
    {
      id: 4,
      name: "GREEN TEA CAKE CHỮ NHẬT",
      price: 150000,
      image: anhsethu4,
      size:"20cm x 30cm",
      describe:"Bánh làm từ 3 lớp gato trắng xen giữa 3 lớp kem tươi. Bên ngoài bánh phủ 1 lớp kem tươi vị trà xanh và bột trà xanh rắc phía trên.",
      category:"mooncake"
    },
    {
      id: 5,
      name: "CARAMEL MOIST CHOCOLATE CAKE",
      price: 150000,
      image: anhsethu5,
      size:"20cm x 30cm",
      describe:"Bánh làm từ 3 lớp gato socola xen giữa 3 lớp kem tươi vị socola. Phủ bên ngoài là 1 lớp sốt caramel có vị đắng nhẹ.",
      category:"mooncake"
    },
    {
      id: 6,
      name: "HAWAII MOUSSE",
      price: 150000,
      image: anhsethu6,
      size:"20cm x 30cm",
      describe:"Bánh làm từ kem tươi nhiều trứng với phần trên là caramel dừa. Xung quanh được trang trí bằng 1 lớp gato mềm vị caramel.",
      category:"mooncake"
    },
    {
      id: 7,
      name: "CARAMEL CHOCOLATE CAKE MOUSSE",
      price: 150000,
      image: anhsethu7,
      size:"20cm x 30cm",
      category:"mooncake"
    },
    {
      id: 8,
      name: "PASSION FRUIT MOUSSE",
      price: 150000,
      image: anhsethu8,
      size:"20cm x 30cm",
      category:"mooncake"
    },
    {
      id: 9,
      name: "PETIT",
      price: 150000,
      image: anhsethu9,
      size:"20cm x 30cm",
      category:"birdaycake"
    },
    {
      id: 10,
      name: "PASSION CAKE MOUSSE 2",
      price: 150000,
      image: anhsethu10,
      size:"20cm x 30cm",
      category:"birdaycake"
    },
    {
      id: 11,
      name: "MOIST CHOCOLATE CAKE HÌNH VUÔNG",
      price: 150000,
      image: anhsethu11,
      size:"20cm x 30cm",
      category:"birdaycake"
    },
    {
      id: 12,
      name: "CAPUCCINO",
      price: 150000,
      image: anhsethu12,
      size:"20cm x 30cm",
      category:"birdaycake"
    },
    {
      id: 13,
      name: "TIRAMISU",
      price: 150000,
      image: anhsethu13,
      size:"20cm x 30cm",
      category:"birdaycake"
    },
    {
      id: 14,
      name: "TIRAMISU VUÔNG",
      price: 150000,
      image: anhsethu14,
      size:"20cm x 30cm",
      category:"birdaycake"
    },
    {
      id: 15,
      name: "CAPUCCINO",
      price: 150000,
      image: anhsethu15,
      size:"20cm x 30cm",
      category:"birdaycake"
    },
    {
      id: 16,
      name: "RED VELVET CAKE VUÔNG",
      price: 150000,
      image: anhsethu16,
      size:"20cm x 30cm",
      category:"birdaycake"
    },
  ]
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchResults = state.product.filter(product => {
        // Thực hiện tìm kiếm sản phẩm dựa trên thuộc tính nào đó của sản phẩm
        // Ví dụ: Tìm kiếm theo tên sản phẩm
        return product.name.toLowerCase().includes(searchTerm);
      });
    },
  },
})

// Action creators are generated for each case reducer function
export const {searchProducts } = productSlice.actions

export default productSlice.reducer