
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Khởi tạo slice cho API sản phẩm
export const AdminApi = createApi({
  reducerPath: 'AdminApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:44335' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (payload) =>({ 
      url:'/api/Account/forgot',
      body: payload,
      method: 'POST',
      })
    }),
  }),
});

// Export các action và reducer của slice
export const {useLoginMutation} = AdminApi;

