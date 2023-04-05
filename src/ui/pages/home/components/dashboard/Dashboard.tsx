import { Container } from "@mui/material";
import PaperView from "../../../../shared/components/PaperView";

export function Dashboard() {
    return (
        <PaperView >
            <Container maxWidth="sm" sx={{ padding: 4}}>
                <p>Resumen y noticias</p>
            </Container>
        </PaperView>
    )
}