import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { restaurantService } from "../../../core/services/RestaurantService"
import useAccountState from "../../../state/hooks/useAccountState"
import useRestaurantState from "../../../state/hooks/useRestaurantState"
import DrawerContainer from "./components/drawer-container/DrawerContainer"

export default function HomePage () {
    
    const { account } = useAccountState()
    const { updateRestaurant, updateAccountId } = useRestaurantState()

    useEffect(() => {
        restaurantService
            .findByAccountId(account.id)
            .then(restaurant => {
                if (restaurant === null) {
                    updateAccountId(account.id)
                } else {
                    updateRestaurant(restaurant)
                }
            })
            .catch(err => console.error(err))
        
    }, [])

    return (
        <DrawerContainer>
            <Outlet />
        </DrawerContainer>
    )

}