import { Typography } from "@mui/material";


export default function FormTitle({ title }) {
    return (
      <Typography variant="h4" gutterBottom sx={{ marginTop: 4, marginBottom: 4}}>
        {title}
      </Typography>
    )
}