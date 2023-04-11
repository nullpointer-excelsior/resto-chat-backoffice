import { Restaurant } from "../model/Restaurant";
import { restaurantService } from "../services/RestaurantService";
import { tableService } from "../services/TableService";


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
    const restaurantCreated = await restaurantService.create(restaurantToCreate)

    const tableToCreate = {
        calletAt: new Date(),
        isCalling: false,
        restaurantId: restaurantCreated.id,
        tableNumber: 0
    }
    await tableService.create(tableToCreate)
        
    return restaurantCreated

}