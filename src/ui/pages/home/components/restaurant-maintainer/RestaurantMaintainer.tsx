import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../state/store';
import PaperView from '../../../../shared/components/PaperView';
import EditRestaurant from './EditRestaurant';
import NewRestaurant from './NewRestaurant';


function EditView() {
    return (
        <PaperView >
            <EditRestaurant />
        </PaperView>
    )
}

function CreateView() {
    return (
        <PaperView>
            <NewRestaurant />
        </PaperView>
    )
}
export default function RestaurantMaintainer() {

    const restaurant = useSelector((state: RootState) => state.restaurant)

    return (
        restaurant ? <EditView/> : <CreateView />
    )

}