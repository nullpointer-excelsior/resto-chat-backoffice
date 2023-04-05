import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../../core/model/Restaurant';

export type RestaurantState = Restaurant | null

// const initialState: RestaurantState = {
//   id: '',
//   accountId: '',
//   callEndpoint: '',
//   chatbotName: '',
//   menus: null,
//   menuUrl: '',
//   restaurantName: ''
// };

const initialState = null

const slice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action: PayloadAction<RestaurantState>) => {
      return action.payload
    } 
  },
});

export const { setRestaurant } = slice.actions;

export const restaurantReducer = slice.reducer;


