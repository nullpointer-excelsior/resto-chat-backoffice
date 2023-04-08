import { useEffect, useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Box, Divider } from '@mui/material';
import useRestaurantState from '../../../../../../state/hooks/useRestaurantState';
import { Menu } from '../../../../../../core/model/Menu';
import MenuItemMaintainer from './MenuItemMaintainer';
import SaveCancelButtons from '../../../../../shared/components/SaveCancelButtons';
import { restaurantService } from '../../../../../../core/services/RestaurantService';
import { useNotification } from '../../../../../shared/context/NotificationContext';

interface Props {
  menus: Menu[]
}

export default function MenuMaintainer(props: Props) {

  const { menus: menuState } = props
  const { updateMenu, restaurant } = useRestaurantState()
  const { showNotification } = useNotification()
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
        <Box display="flex" alignItems="center">
          <TextField fullWidth label="Nombre de categoría" size="small" value={categoryName} onChange={handleNameChange} />
          <Button disabled={categoryName.length === 0} variant="contained" sx={{ marginLeft: '16px' }} onClick={handleAddCategory}>Agregar</Button>
        </Box>
        <Divider sx={{ marginY: 4}}/>      

        { menus && menus.length === 0? <p style={{ textAlign: 'center'}}>No hay categorias</p>: null}       
        
        <List>
          {menus && menus.map((menu) => (
            <ListItem key={menu.category}>
              <ListItemText primary={menu.category} secondary={`${menu.items.length} Productos`} />
              <Button variant="outlined" color="secondary" onClick={() => handleAddProduct(menu)} >Agregar Producto</Button>
            </ListItem>
          ))}
        </List>

        <Divider sx={{ marginY: 4}}/>  
        
        <SaveCancelButtons onSave={handleOnSaveMenu} onCancel={handleOnCancelSaveMenu} />
        
      </>
    )
  }

  return  (
    <MenuItemMaintainer menu={menuToUpdate} onSave={handleOnSaveMenuItem} onCancel={handleOnCancelMenuItem}/>
  )

}
