import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../core/model/Restaurant';
import { Menu } from '../../core/model/Menu';

export type RestaurantState = Restaurant | null

export type MenuPayload = Menu[]

const initialState = null

const slice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<RestaurantState>) => {
      return action.payload
    },
    updateMenu: (state, action: PayloadAction<MenuPayload>) => {
      state.menus = action.payload
      return state
    }
  },
});

export const { setRestaurant, updateMenu } = slice.actions;

export const restaurantReducer = slice.reducer;


