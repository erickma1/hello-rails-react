import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk(
  'greetings/fetchGreeting',
  async () => {
    try {
      const response = await axios.get('/greetings/random');
      return response.data.greeting;
    } catch (error) {
      throw new Error('Failed to fetch.');
    }
  },
);

const initialState = {
  greeting: '',
  isLoading: false,
  error: null,
};

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.greeting = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchGreeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default greetingsSlice.reducer;
