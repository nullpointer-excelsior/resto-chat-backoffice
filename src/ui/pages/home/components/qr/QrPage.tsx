import { Container } from "@mui/material";
import PaperView from "../../../../shared/components/PaperView";
import QrMainChat from "./main-chat/QrMainChat";


export default function QrPage() {
    return (
        <PaperView>
            <Container maxWidth="sm" sx={{ padding: 4}}>
                <QrMainChat />
            </Container>
        </PaperView>
    )
}