import { configureStore, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Khởi tạo slice cho API sản phẩm
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:44358' }),
  tagTypes: ['Post', 'User'],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => '/api/Home/GetProductBanchay?sl=32',
    }),
    searchProduct: builder.mutation({
      query: (payload) =>({ 
      url:'/api/Home/SearchSp',
      body: payload,
      method: 'POST',
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post', id })), 'Post']
          : ['Post'],
      }),

    }),
    creatDonHang: builder.mutation({
      query: (payload) =>({ 
      url:'/api/DonHang/create_donhang',
      body: payload,
      method: 'POST',
      })
    }),
    
  }),
});

// Export các action và reducer của slice
export const { useGetProductQuery , useSearchProductMutation , useCreatDonHangMutation} = productApi;