import { restaurantService } from '../../../../../core/services/RestaurantService';
import useRestaurantState from '../../../../../state/hooks/useRestaurantState';
import { useNotification } from '../../../../shared/context/NotificationContext';
import RestaurantForm, { IRestaurantForm } from './RestaurantForm';


export default function EditRestaurant() {

    const { restaurant } = useRestaurantState()
    const { showNotification } = useNotification()

    const initialValues: IRestaurantForm = {
        restaurantName: restaurant.restaurantName,
        menuUrl: restaurant.menuUrl,
        chatbotName: restaurant.chatbotName,
    }

    const onSubmit = async (values: IRestaurantForm, actions) => {

        console.log('edit a restaurant', values)

        try {
            const response = await restaurantService.update({
                id: restaurant.id,
                accountId: restaurant.accountId,
                callEndpoint: restaurant.callEndpoint,
                chatbotName: values.chatbotName,
                menus: restaurant.menus,
                menuUrl: values.menuUrl,
                restaurantName: values.restaurantName
            })
            showNotification({
                severity: 'success',
                title: 'Successful',
                message: `Restaurant ${values.restaurantName} edited successfully.`,
                duration: 5000
            })

        } catch (error) {
            console.log(error)
            showNotification({
                severity: 'error',
                title: 'Something went wrong. Please try again.',
                message: `Error ${error.message}`,
                duration: 5000
            })
        }
    }
    return (
        <RestaurantForm title={'My Restaurant Information'} initialValues={initialValues} onSubmit={onSubmit} />
    )
}