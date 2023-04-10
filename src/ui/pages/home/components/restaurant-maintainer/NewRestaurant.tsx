import { useNavigate } from "react-router-dom"
import { restaurantService } from "../../../../../core/services/RestaurantService"
import useAccountState from "../../../../../state/hooks/useAccountState"
import useRestaurantState from "../../../../../state/hooks/useRestaurantState"
import { useNotification } from "../../../../shared/context/NotificationContext"
import RestaurantForm, { IRestaurantForm } from "./RestaurantForm"

const initialValues: IRestaurantForm = {
    restaurantName: '',
    menuUrl: '',
    chatbotName: ''
}

export default function NewRestaurant() {
    
    const { account } = useAccountState()
    const { showNotification } = useNotification()
    const { setRestaurant } = useRestaurantState()
    const navigate = useNavigate();

    const onSubmit = async (values: IRestaurantForm, actions) => {

        console.log('submit new restaurant', values)

        try {
            await restaurantService.create({
                accountId: account.id,
                chatbotName: values.chatbotName,
                menus: [],
                menuUrl: values.menuUrl,
                restaurantName: values.restaurantName
            })
                .then(restaurant => {
                    setRestaurant(restaurant)
                    navigate('/home/dashboard')
                })

        } catch (e) {
            console.error(e)
            showNotification({
                severity: 'error',
                title: 'Something went wrong. Please try again.',
                message: `Error ${e.message}`,
                duration: 5000
            })
        }
        showNotification({
            severity: 'success',
            title: 'Successful',
            message: `Restaurant created successfully.`,
            duration: 5000
        })
    }

    return (
        <RestaurantForm title={'Add Restaurant Info'} initialValues={initialValues} onSubmit={onSubmit} />
    )
    
}