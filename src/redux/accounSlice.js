import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggin: false,
  
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    login: (state, action)=>{
        state.isLoggin = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { login } = accountSlice.actions

export default accountSlice.reducer