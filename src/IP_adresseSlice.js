import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ip: "192.168.5.252",
  user: "OTgxMzVkMDg0NmY2NGNlOWIyN2I3NzUxYmI4MDQ3NGE1NTI4MWUwNDZjZGRmNTM0OWQ2N2FiN2U4MjRiMDYyYTg4NmM3ZDFiODU4NTAxZWI4ZWNhZTQ3YmRiNjYwMmZkZmMyYjUyZDMzZWVhZDU5NjZlZGYwYWQ0ODUxNTNkZDM=",
  api: "ZThkNjYxMTliZDFmMjA5MDMxMDRlMTgwOTNiOTdhY2Q4MDU4ZjU3N2JkZmE5NzM5N2ExOWYwMzhjNjAxNGEzZjNiNDk2YWVhZWMzNWJkYzIxNzI0OTBjZWM4ZDE1MjExZWY4MTgzZDMyNjVjNGNmYWY3MDVlNjkyNjgxYWZjMmU="
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

export const { setIP, setApi, setUser } = IP_addresseSlice.actions
export const selectIP = (state) => state.Ip.ip
export const selectUser = (state) => state.Ip.user
export const selectApi = (state) => state.Ip.api

export default IP_addresseSlice.reducer