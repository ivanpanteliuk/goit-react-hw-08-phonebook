import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'redux/helpers';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error.message);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      console.log(error);
      rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const storedToken = state.auth.token;

    if (storedToken === null) {
      return rejectWithValue();
    }

    try {
      token.set(storedToken);
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
      rejectWithValue(error.message);
    }
  }
);
