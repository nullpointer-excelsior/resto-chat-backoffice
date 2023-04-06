import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface Item {
  name: string;
  price: string;
  description: string;
}

const items: Item[] = [
  { name: 'Producto 1', price: '$10.99', description: 'Descripción del producto 1' },
  { name: 'Producto 2', price: '$20.99', description: 'Descripción del producto 2' },
  { name: 'Producto 3', price: '$30.99', description: 'Descripción del producto 3' },
];

export default function MenuTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Precio</TableCell>
            <TableCell>Descripción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
