import { Typography } from "@mui/material";


export default function SubTitle({ title }) {
    return (
      <Typography variant="h6" gutterBottom sx={{ marginTop: 4, marginBottom: 4}}>
        {title}
      </Typography>
    )
}