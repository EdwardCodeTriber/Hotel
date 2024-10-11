import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase';

export const createBooking = createAsyncThunk('bookings/createBooking', async ({ accommodationId, userId, checkIn, checkOut, guests }, { rejectWithValue }) => {
  try {
    const bookingRef = await db.collection('bookings').add({
      accommodationId, userId, checkIn, checkOut, guests, status: 'pending'
    });
    return { id: bookingRef.id, accommodationId, checkIn, checkOut, guests, status: 'pending' };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const bookingSlice = createSlice({
  name: 'bookings',
  initialState: { list: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.loading = false;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default bookingSlice.reducer;
