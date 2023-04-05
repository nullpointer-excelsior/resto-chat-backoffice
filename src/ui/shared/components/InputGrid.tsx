import { Grid } from '@mui/material';

export default function InputGrid({ children }) {
    return (
        <Grid item lg={10} md={10} sm={10} xs={10}  sx={{ width: '100%' }}>
            {children}
        </Grid>
    )
}