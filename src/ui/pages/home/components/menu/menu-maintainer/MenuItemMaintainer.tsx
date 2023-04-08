import { useState } from 'react';
import { TextField, Button, Table, TableHead, TableRow, TableCell, TableBody, IconButton, Typography, Box, Divider } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Menu } from '../../../../../../core/model/Menu';
import AddIcon from '@mui/icons-material/Add';
import SaveCancelButtons from '../../../../../shared/components/SaveCancelButtons';

interface Props {
  menu: Menu;
  onSave: (menu: Menu) => void;
  onCancel: () => void
}

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

export default function MenuItemMaintainer(props: Props) {

  const { menu, onSave, onCancel } = props

  const [formState, setFormState] = useState<MenuItem>({ name: '', price: '', description: '' });
  const [menuItems, setMenuItems] = useState<MenuItem[]>([ ...menu.items ]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMenuItems([...menuItems, formState]);
    setFormState({ name: '', price: '', description: '' });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSave = () => {
    setMenuItems([]);
    const newMenu: Menu = {
      ...menu,
      items: menuItems
    }
    onSave(newMenu)
  };

  return (
    <>
      <Typography variant="h6" gutterBottom sx={{ marginTop: 4, marginBottom: 4}}>
        Productos de la categoria {menu.category}
      </Typography>
      <Box component="form" onSubmit={handleFormSubmit} display="flex" flexDirection="column">
        
        <Box display="flex" gap={4}>
          <TextField label="Nombre" name="name" value={formState.name} onChange={handleInputChange} margin="normal" required sx={{ width: '60%' }} />
          <TextField label="Precio" name="price" value={formState.price} onChange={handleInputChange} margin="normal" required sx={{ width: '40%' }}  />
        </Box>
        <Box display="flex" gap={2} alignItems="center">
          <TextField label="Descripción" name="description" value={formState.description} onChange={handleInputChange} margin="normal" multiline sx={{ width: '80%', height: '100%' }}  />
          <Button variant="contained" type="submit" startIcon={<AddIcon />} >
            Agregar
          </Button>
        </Box>
      </Box>

      <Divider sx={{ marginY: 4}}/> 

      { menuItems.length === 0? <><p style={{ textAlign: 'center'}}>No hay categorias</p> <Divider sx={{ marginY: 4}}/></>: null}       
      
      { menuItems.length > 0 ?
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Descripción</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuItems.map((menuItem, index) => (
            <TableRow key={index}>
              <TableCell>{menuItem.name}</TableCell>
              <TableCell>{menuItem.price}</TableCell>
              <TableCell>{menuItem.description}</TableCell>
              <TableCell>
                <IconButton onClick={() => setMenuItems(menuItems.filter((_, i) => i !== index))}>
                  <Delete color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>: null }
      
      <SaveCancelButtons onSave={handleSave} onCancel={onCancel} />

    </>
  );
}
