import { collection, getDocs, query, where } from "firebase/firestore";
import { Restaurant } from "../model/Restaurant";
import { firestoreClient } from "./backend/firestore-client";

const COLLECTION = 'restaurants'

class RestaurantService {

    async findById(id: string) {
        return await firestoreClient.getDocumentById(COLLECTION, id)
    }

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

    async create(restaurant: Omit<Restaurant, 'id'>) {
        const id = restaurant.restaurantName.replaceAll(' ', '-').toLowerCase()
        const newRestaurant: Restaurant= {
            id: id,
            ...restaurant
        }
        return await firestoreClient.setDocument(COLLECTION, id, restaurant).then(() => newRestaurant)
    }

    async update(restaurant: Restaurant) {
        const id = restaurant.id
        return await firestoreClient.setDocument(COLLECTION, id, restaurant)
    }
}

export const restaurantService = new RestaurantService()