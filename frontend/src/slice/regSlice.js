import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const reg = createAsyncThunk('/reg', async (newUser) => {
    const response = await axios.post('http://localhost:8000/api/user/register', newUser);
    return response.data; // Adjust based on the actual response structure
      
  });