import { Paper } from '@mui/material';

export default function PaperView({ children }) {

    return (
        <Paper sx={{
            paper: {
                padding: 2,
                display: 'flex',
                overflow: 'auto',
                flexDirection: 'column',
            },
            fixedHeight: {
                height: 240,
            },
        }}>
            {children}
        </Paper>
    );
}