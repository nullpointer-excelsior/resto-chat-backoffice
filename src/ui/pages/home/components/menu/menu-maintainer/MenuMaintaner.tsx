import { useEffect, useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Box, Divider } from '@mui/material';
import useRestaurantState from '../../../../../../state/hooks/useRestaurantState';
import { Menu } from '../../../../../../core/model/Menu';
import MenuItemMaintainer from './MenuItemMaintainer';

interface Props {
  menus: Menu[]
}

export default function MenuMaintainer(props: Props) {

  const { menus: menuState } = props
  const { updateMenu } = useRestaurantState()
  // menus
  const [categoryName, setCategoryName] = useState('');
  const [menus, setMenus] = useState<Menu[]>([...menuState]);
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

  const handleOnSaveMenu = (menu: Menu) => {
    const newMenus = menus.filter(m => m.category !== menu.category)
    setMenus([ ...newMenus, menu ])
    setMenuToUpdate(null)
  }
  // update state
  useEffect(() => {
    updateMenu(menus)
  }, [menus])


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
      </>
    )
  }

  return  (
    <MenuItemMaintainer menu={menuToUpdate} onSave={handleOnSaveMenu} onCancel={() => setMenuToUpdate(null)}/>
  )

}
