import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase';

export const fetchAccommodations = createAsyncThunk('accommodations/fetchAccommodations', async () => {
  const snapshot = await db.collection('accommodations').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
});

const accommodationSlice = createSlice({
  name: 'accommodations',
  initialState: { list: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccommodations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAccommodations.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(fetchAccommodations.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default accommodationSlice.reducer;
