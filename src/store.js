import { configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import IP_addresseSlice  from './IP_adresseSlice'

export const store = configureStore({
  reducer: {
      Ip: IP_addresseSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
})