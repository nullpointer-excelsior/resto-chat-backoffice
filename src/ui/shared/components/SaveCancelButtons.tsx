import { Box, Button } from '@mui/material';

export default function SaveCancelButtons({ onSave, onCancel }) {
  return (
    <Box display="flex" justifyContent="center" sx={{ marginY: 4 }}>
      <Button variant="contained" onClick={onSave} sx={{ marginRight: '10px' }}>Guardar</Button>
      <Button color="secondary" variant="outlined" onClick={onCancel}>Cancelar</Button>
    </Box>
  );
}
