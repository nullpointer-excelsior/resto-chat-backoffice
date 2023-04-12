import { useSelector } from "react-redux"
import { RootState } from "../../../../../../state/store"
import QRious from 'qrious';
import SubTitle from "../../../../../shared/components/SubTitle";
import { Box, Button, Dialog, Typography } from "@mui/material";
import { useState } from "react";
import PdfContainer from "./PdfContainer";

const generateSource = (url) => {
    const qr = new QRious({
        background: '#b9f6ca',
        foreground: '#aa2e25',
        level: 'H',
        size: 300,
        value: url
    })
    return qr.toDataURL()
}


export default function QrMainChat() {

    const { restaurant } = useSelector((state: RootState) => state)
    const [open, setOpen] = useState(false);
    const source = generateSource(`https://resto-bot-47670.web.app/restaurant/${restaurant.id}`)

    const handleClose = () => {
        setOpen(false);
    };

    const handlePrint = () => {
        setOpen(true);
    };

    if (!restaurant.menuUrl) {
        return <p style={{ textAlign: 'center'}}>No una dirección web del menu especificada</p>
    }
    
    return (
        <Box textAlign="center" >
            <Box textAlign="center" >
                <Typography variant="h4" gutterBottom sx={{ marginTop: 4, marginBottom: 4}}>
                    Código QR Chatbot
                </Typography>
                <img src={source} alt="QR code"/>
                <SubTitle title="Código QR para interactura con el chatbot por defecto" />
            </Box>
            <Button variant="contained" onClick={handlePrint}>Imprimir código QR</Button>
            <Dialog onClose={handleClose} open={open}>
                <PdfContainer source={source} />
            </Dialog>
        </Box>
    )
}