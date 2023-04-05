import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { accountReducer } from './slices/account.slice';
import { authReducer } from './slices/auth.slice';
import { restaurantReducer } from './slices/restaurant.slice';

const rootReducer = combineReducers({
    auth: authReducer,
    account: accountReducer,
    restaurant: restaurantReducer
  });

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

