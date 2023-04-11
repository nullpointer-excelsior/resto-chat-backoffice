import { useSelector, useDispatch } from 'react-redux'
import { MenuPayload, RestaurantState, updateRestaurant, updateMenu, updateAccountId } from '../slices/restaurant.slice'
import { RootState } from '../store'

export default function useRestaurantState() {
    
    const dispatch = useDispatch()

    return {
        restaurant: useSelector((state: RootState) => state.restaurant),
        updateRestaurant: (restaurant: RestaurantState) => dispatch(updateRestaurant(restaurant)),
        updateAccountId: (accountId: string) => dispatch(updateAccountId(accountId)),
        updateMenu: (menus: MenuPayload) => dispatch(updateMenu(menus))
    }
    
}