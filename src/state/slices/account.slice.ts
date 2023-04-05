import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account } from '../../core/model/Account';

export type AccountState = Account

const initialState: AccountState = {
  id: '',
  email: 'no-user@xxx.com',
  plan: 'free'
};

const authSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<AccountState>) => {
      return action.payload
    } 
  },
});

export const { setAccount } = authSlice.actions;

export const accountReducer = authSlice.reducer;


