import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ip: "192.168.5.252",
  user:"uzheurenfeoza",
  api:"jeijeifuefnjefnf"
}

export const IP_addresseSlice = createSlice({
  name: 'Ip',
  initialState,
  reducers: {
    setIP: (state, action) => {
      state.ip = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setApi: (state, action) => {
      state.api = action.payload
    },
}
})

// Action creators are generated for each case reducer function
export const {setIP, setApi, setUser} = IP_addresseSlice.actions
export const selectIP = (state)=> state.Ip.ip
export const selectUser = (state)=> state.Ip.user
export const selectApi = (state)=> state.Ip.api

export default IP_addresseSlice.reducer