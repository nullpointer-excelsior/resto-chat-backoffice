import { collection, getDocs, query, where } from "firebase/firestore";
import { Restaurant } from "../model/Restaurant";
import { firestoreClient } from "./backend/firestore-client";

const COLLECTION = 'restaurants'

class RestaurantService {

    async findByAccountId(id: string) {
        try {
            const docRef = collection(firestoreClient.getDb(), COLLECTION)
            const queryDoc = query(docRef, where("accountId", "==", id));
            const result = await getDocs(queryDoc)
            if (!result.empty){
                return result.docs.map(doc => ({ ...doc.data(), id: doc.id }))[0] as Restaurant
            }
        } catch (error) {
            console.error(error)
        }
        return null
    }

    async create(restaurant: Omit<Restaurant, 'id'>): Promise<Restaurant> {        
        const id = await firestoreClient.addDocument(COLLECTION, restaurant)
        const created: Restaurant = {
            ...restaurant,
            id,
        }
        return created
    }

    async update(restaurant: Restaurant) {
        const id = restaurant.id
        const restaurantToUpdate: Omit<Restaurant, 'id'> = {
            accountId: restaurant.accountId,
            chatbotName: restaurant.chatbotName,
            menus: restaurant.menus,
            menuUrl: restaurant.menuUrl,
            restaurantName: restaurant.restaurantName
        }
        return await firestoreClient.setDocument(COLLECTION, id, restaurantToUpdate).then(() => restaurant)
    }
}

export const restaurantService = new RestaurantService()