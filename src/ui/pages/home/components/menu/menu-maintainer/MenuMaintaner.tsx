import { useState } from 'react';
import { TextField, Button, Box, Divider, Typography } from '@mui/material';
import useRestaurantState from '../../../../../../state/hooks/useRestaurantState';
import { Menu } from '../../../../../../core/model/Menu';
import MenuItemMaintainer from './MenuItemMaintainer';
import SaveCancelButtons from '../../../../../shared/components/SaveCancelButtons';
import { restaurantService } from '../../../../../../core/services/RestaurantService';
import { useNotification } from '../../../../../shared/context/NotificationContext';
import MenuList from './MenuList';

interface Props {
  menus: Menu[]
}

export default function MenuMaintainer(props: Props) {

  const { menus: menuState } = props
  const { updateMenu, restaurant } = useRestaurantState()
  const { showNotification } = useNotification()
  // restaurant info
  const [restaurantName, setRestaurantName] = useState('')
  const [menuUrl, setMenuUrl] = useState('')
  // menus
  const [categoryName, setCategoryName] = useState('');
  const [menus, setMenus] = useState<Menu[]>([...menuState]);
  const [initialMenu, setInitialState] = useState<Menu[]>([...menuState]);
  // menuitems
  const [menuToUpdate, setMenuToUpdate] = useState<Menu>(null)

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
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

  const handleOnSaveMenuItem = (menu: Menu) => {
    const newMenus = menus.filter(m => m.category !== menu.category)
    setMenus([ ...newMenus, menu ])
    setMenuToUpdate(null)
  }

  const handleOnCancelMenuItem = () => {
    setMenuToUpdate(null)
  }


  const handleOnSaveMenu = () => {
    restaurantService.update(restaurant)
      .then(() => {
        updateMenu(menus)
        setInitialState([...restaurant.menus])
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

  const handleOnCancelSaveMenu = () => {
    // console.log('reset state', initialMenu)
    setMenus([ ...initialMenu ])
    // updateMenu(initialMenu)
  }


  if (!menuToUpdate) {
    return (
      <>
      {/* restaurant info */}
        <Typography color="primary" variant="h5" gutterBottom sx={{ marginTop: 4, marginBottom: 4}}>
          Información de Restaurant 
        </Typography>
        <Box display="flex" gap={4}>
          <TextField fullWidth label="Nombre Restaurant" name="restaurantName" margin="normal" size="small" required />
        </Box>
        <Box display="flex" gap={4}>
          <TextField fullWidth label="Enlace Menu digital" name="menuUrl" margin="normal" size="small" required  placeholder='Ejemplo: https://my-web-page.com/menu'/>
        </Box>
        <Divider sx={{ marginY: 4}}/> 
        {/* menu */}
        <Typography color="primary" variant="h5" gutterBottom sx={{ marginTop: 4, marginBottom: 4}}>
          Menus 
        </Typography>
        <Box display="flex" alignItems="center">
          <TextField fullWidth label="Nombre de categoría" size="small" value={categoryName} onChange={handleNameChange} />
          <Button disabled={categoryName.length === 0} variant="contained" sx={{ marginLeft: '16px' }} onClick={handleAddCategory}>Agregar</Button>
        </Box>

        <Divider sx={{ marginY: 4}}/>      

        <MenuList onAddProduct={handleAddProduct} menus={menus} onRemoveCategory={handleRemoveCategory} />

        <Divider sx={{ marginY: 4}}/>  
        
        <SaveCancelButtons onSave={handleOnSaveMenu} onCancel={handleOnCancelSaveMenu} />
        
      </>
    )
  }

  return  (
    <MenuItemMaintainer menu={menuToUpdate} onSave={handleOnSaveMenuItem} onCancel={handleOnCancelMenuItem}/>
  )

}
