import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../core/model/Restaurant';
import { Menu } from '../../core/model/Menu';

export type RestaurantState = Restaurant

export type MenuPayload = Menu[]

const initialState: RestaurantState = {
  id: null,
  accountId: null,
  chatbotName: '',
  menus: [],
  menuUrl: '',
  restaurantName: ''
}

const slice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    updateRestaurant: (state, action: PayloadAction<RestaurantState>) => {
      return action.payload
    },
    updateAccountId(state, action: PayloadAction<string>) {
      state.accountId = action.payload
      return state
    },  
    updateMenu: (state, action: PayloadAction<MenuPayload>) => {
      state.menus = action.payload
      return state
    }
  },
});

export const { updateRestaurant, updateMenu, updateAccountId } = slice.actions;

export const restaurantReducer = slice.reducer;


