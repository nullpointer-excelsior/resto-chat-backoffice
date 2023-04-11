import { Container } from "@mui/material";
import PaperView from "../../../../shared/components/PaperView";
import RestaurantMaintainer from "./restaurant-maintainer/RestaurantMaintaner";

export function RestaurantPage() {

    return (
        <PaperView>
            <Container maxWidth="sm" sx={{ padding: 4}}>
                <RestaurantMaintainer />
            </Container>
        </PaperView>
    )
    
}