import { useState } from 'react';
import { TextField, Button, Box, Divider, Typography } from '@mui/material';
import useRestaurantState from '../../../../../../state/hooks/useRestaurantState';
import { Menu } from '../../../../../../core/model/Menu';
import ProductMaintainer from './ProductMaintainer';
import SaveCancelButtons from '../../../../../shared/components/SaveCancelButtons';
import { useNotification } from '../../../../../shared/context/NotificationContext';
import MenuList from './MenuList';
import { Restaurant } from '../../../../../../core/model/Restaurant';
import { CreateOrUpdateRestaurant } from '../../../../../../core/application/CreateOrUpdateRestaurant';


export default function RestaurantMaintainer() {

  const { restaurant, updateRestaurant } = useRestaurantState()
  const { showNotification } = useNotification()
  // restaurant info
  const [restaurantName, setRestaurantName] = useState(String(restaurant.restaurantName))
  const [menuUrl, setMenuUrl] = useState(String(restaurant.menuUrl))
  // menus
  const [categoryName, setCategoryName] = useState('');
  const [menus, setMenus] = useState<Menu[]>([...restaurant.menus]);
  // menuitems
  const [menuToUpdate, setMenuToUpdate] = useState<Menu>(null)

  const handleCategoryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleRestaurantNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRestaurantName(event.target.value);
  };

  const handleMenuUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMenuUrl(event.target.value);
  };

  const handleAddCategory = () => {
    if (categoryName && !menus.map(m => m.category).includes(categoryName)) {
      const newMenu = {
        category: categoryName,
        items: []
      }
      setMenus([ ...menus, newMenu ]);
      setCategoryName('');
    }
  };

  const handleAddProduct = (menu: Menu) => {
    setMenuToUpdate(menu)
  }

  const handleRemoveCategory = (cat: string) => {
    const newMenu = [
      ...menus.filter(m => m.category !== cat)
    ]
    setMenus(newMenu)
  }

  const handleOnSaveProduct = (menu: Menu) => {
    const newMenus = menus.filter(m => m.category !== menu.category)
    setMenus([ ...newMenus, menu ])
    setMenuToUpdate(null)
  }

  const handleOnCancelProduct = () => {
    setMenuToUpdate(null)
  }

  const handleOnErrorRestaurantName = () => {
    if (restaurant.id == null) {
      return false
    }
    return restaurantName === ''
  }

  const handleOnErrorMenuUrl = () => {
    if (restaurant.id == null) {
      return false
    }
    return menuUrl === ''
  }

  const handleOnSaveRestaurant = () => {
    const restaurantToSave: Restaurant = { 
      ...restaurant,
      restaurantName: restaurantName,
      menuUrl: menuUrl, 
      menus: menus
    }
    CreateOrUpdateRestaurant(restaurantToSave)
      .then(restaurantCreated => {
        console.log('update-state', restaurantCreated)
        updateRestaurant(restaurantCreated)
        showNotification({
          severity: 'success',
          title: 'Successful',
          message: `Restaurant menu updated!`,
          duration: 5000
        })
      })
      .catch(err => {
        showNotification({
          severity: 'error',
          title: 'Error',
          message: `Error actualizando menus ${err.message}`,
          duration: 5000
        })
      })
    
  }

  const handleOnCancelRestaurant = () => {
    setMenus([ ...restaurant.menus ])
    setRestaurantName(String(restaurant.restaurantName))
    setMenuUrl(String(restaurant.menuUrl))
  }

  const validateForm = () => {
    return restaurantName !== '' && menuUrl !== ''
  }


  if (!menuToUpdate) {
    return (
      <>
        <Typography color="primary" variant="h5" gutterBottom sx={{ marginTop: 4, marginBottom: 4}}>
          Información de Restaurant 
        </Typography>
        <Box display="flex" gap={4}>
          <TextField value={restaurantName} onChange={handleRestaurantNameChange} error={handleOnErrorRestaurantName()} fullWidth label="Nombre Restaurant" name="restaurantName" margin="normal" size="small" required  />
        </Box>
        <Box display="flex" gap={4}>
          <TextField value={menuUrl} onChange={handleMenuUrlChange} error={handleOnErrorMenuUrl()} fullWidth label="Enlace Menu digital" name="menuUrl" margin="normal" size="small" required helperText='Ejemplo: www.mi-restaurant.com/menu'/>
        </Box>
        <Divider sx={{ marginY: 4}}/> 
        <Typography color="primary" variant="h5" gutterBottom sx={{ marginTop: 4, marginBottom: 4}}>
          Menus 
        </Typography>
        <Box display="flex" alignItems="center">
          <TextField fullWidth label="Nombre de categoría" size="small" value={categoryName} onChange={handleCategoryNameChange} />
          <Button disabled={categoryName.length === 0} variant="contained" sx={{ marginLeft: '16px' }} onClick={handleAddCategory}>Agregar</Button>
        </Box>
        <Divider sx={{ marginY: 4}}/>      
        <MenuList onAddProduct={handleAddProduct} menus={menus} onRemoveCategory={handleRemoveCategory} />
        <Divider sx={{ marginY: 4}}/>  
        <SaveCancelButtons disabled={!validateForm()} onSave={handleOnSaveRestaurant} onCancel={handleOnCancelRestaurant} />
      </>
    )
  }

  return <ProductMaintainer menu={menuToUpdate} onSave={handleOnSaveProduct} onCancel={handleOnCancelProduct}/>

}
