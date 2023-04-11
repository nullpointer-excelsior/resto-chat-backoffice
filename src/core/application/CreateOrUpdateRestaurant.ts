import { Restaurant } from "../model/Restaurant";
import { restaurantService } from "../services/RestaurantService";


export async function CreateOrUpdateRestaurant(restaurant: Restaurant) {
    
    console.log('CreateOrUpdateRestaurant', restaurant)
    
    if (restaurant.id !== null) {
        return restaurantService.update(restaurant)
    }

    const restaurantToCreate = {
        accountId: restaurant.accountId,
        chatbotName: restaurant.chatbotName,
        menus: restaurant.menus,
        menuUrl: restaurant.menuUrl,
        restaurantName: restaurant.restaurantName
    }
    
    return await restaurantService.create(restaurantToCreate)
        
}