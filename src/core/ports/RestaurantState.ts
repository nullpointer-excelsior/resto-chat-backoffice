import { Restaurant } from "../model/Restaurant";

export interface RestaurantState {
    
    getState(): Promise<Restaurant>;
    setRestaurant(restaurant: Restaurant): Promise<void>;

}