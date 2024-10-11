import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import accommodationReducer from './slices/accommodationSlice';
import bookingReducer from './slices/bookingSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accommodations: accommodationReducer,
    bookings: bookingReducer,
  },
});
