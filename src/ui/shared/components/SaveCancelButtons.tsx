import { Box, Button } from '@mui/material';

interface Props {
  onSave: () => void; 
  onCancel: () => void;
  disabled?: boolean;
}

export default function SaveCancelButtons({ onSave, onCancel, disabled }: Props) {
  return (
    <Box display="flex" justifyContent="center" sx={{ marginY: 4 }}>
      <Button disabled={disabled} variant="contained" onClick={onSave} sx={{ marginRight: '10px' }}>Guardar</Button>
      <Button color="secondary" variant="outlined" onClick={onCancel}>Cancelar</Button>
    </Box>
  );
}
