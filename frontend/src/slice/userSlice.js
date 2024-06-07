import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('/login', async (user) => {
  const response = await axios.post('http://localhost:8000/api/user/', user);
  const userData = response.data; // Adjust based on the actual response structure
    
  // Assuming response.data contains { token: '...', user: { name: '...', ... } }
  if (userData && userData.token && userData.user) {
    localStorage.setItem('token', JSON.stringify(userData.token));
    localStorage.setItem('user', JSON.stringify(userData.user));
  } else {
    throw new Error('Invalid response structure');
  }
  
  return userData.user;
});


const initialState = { user: null, tokken:null, isLoading: false, error: null };

const userSlice = createSlice({
  name: 'user',
  initialState:initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.tokken = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');                                  
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.tokken = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
