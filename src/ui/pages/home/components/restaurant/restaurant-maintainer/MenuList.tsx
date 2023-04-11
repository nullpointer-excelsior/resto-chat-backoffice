import { IconButton, Tooltip, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Delete } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';


export default function MenuList({ menus, onAddProduct, onRemoveCategory }) {

    if (menus && menus.length === 0) {
        return <p style={{ textAlign: 'center'}}>No hay categorias</p>
    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Categoría</TableCell>
                    <TableCell>Cantidad Productos</TableCell>
                    <TableCell sx={{ textAlign: 'center'}} colSpan={2}>Acciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {menus && menus.map((menu) => (
                    <TableRow key={menu.category}>
                        <TableCell>{menu.category}</TableCell>
                        <TableCell sx={{ textAlign: 'center'}} >{menu.items.length}</TableCell>
                        <TableCell>
                            <Tooltip title="Editar productos de la categoría">
                                <IconButton onClick={() => onAddProduct(menu)} >
                                    <EditIcon color="success" />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                        <TableCell>
                            <Tooltip title="Eliminar categoría">
                                <IconButton onClick={() => onRemoveCategory(menu.category)}>
                                    <Delete color="error" />
                                </IconButton>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );

}

