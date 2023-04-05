import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { restaurantService } from "../../../core/services/RestaurantService"
import useAccountState from "../../../state/hooks/useAccountState"
import useRestaurantState from "../../../state/hooks/useRestaurantState"
import DrawerContainer from "./components/drawer-container/DrawerContainer"

export default function HomePage () {
    
    const { account } = useAccountState()
    const { setRestaurant } = useRestaurantState()
    const navigate = useNavigate();

    useEffect(() =>{
        restaurantService
            .findByAccountId(account.id)
            .then(restaurant => {
                console.log('Restaurant found', restaurant)
                if (restaurant) {
                    setRestaurant(restaurant)
                    navigate('dashboard')
                } else {
                    navigate('restaurant')
                }
            })
    }, [])

    return (
        <DrawerContainer>
            <Outlet />
        </DrawerContainer>
    )

}