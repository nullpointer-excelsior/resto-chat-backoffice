import { Table, TableHead, TableRow, TableCell, TableBody, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

export default function ProductTable({ menuItems, setMenuItems }) {

    if (menuItems.length === 0) {
        return <p style={{ textAlign: 'center'}}>No hay categorias</p>
    }

    return (
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
            {menuItems.map((item, index) => (
                <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                    <IconButton onClick={() => setMenuItems(menuItems.filter((_, i) => i !== index))}>
                    <Delete color="error" />
                    </IconButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
  );
}
