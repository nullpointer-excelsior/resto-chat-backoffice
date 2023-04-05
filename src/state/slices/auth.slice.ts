import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    clearToken(state) {
      state.token = null;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export const authReducer = authSlice.reducer;


