import { Container } from "@mui/material";
import PaperView from "../../../../shared/components/PaperView";
import MenuMaintainer from "./menu-maintainer/MenuMaintaner";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";

export function MenuPage() {

    const menus = useSelector((state: RootState) => state.restaurant.menus)

    return (
        <PaperView >
            <Container maxWidth="sm" sx={{ padding: 4}}>
                <MenuMaintainer menus={menus}/>
            </Container>
        </PaperView>
    )
}