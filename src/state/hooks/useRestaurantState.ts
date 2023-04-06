import { useSelector, useDispatch } from 'react-redux'
import { MenuPayload, RestaurantState, setRestaurant, updateMenu } from '../slices/restaurant.slice'
import { RootState } from '../store'

export default function useRestaurantState() {
    
    const dispatch = useDispatch()

    return {
        restaurant: useSelector((state: RootState) => state.restaurant) as RestaurantState,
        setRestaurant: (restaurant: RestaurantState) => dispatch(setRestaurant(restaurant)),
        updateMenu: (menus: MenuPayload) => dispatch(updateMenu(menus))
    }
    
}