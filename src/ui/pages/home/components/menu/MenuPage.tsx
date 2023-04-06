import { Container, Typography } from "@mui/material";
import PaperView from "../../../../shared/components/PaperView";
import MenuTypes from "./menu-table/MenuTypes";
import MenuTable from "./menu-table/MenuTable";
import MenuMaintainer from "./menu-maintainer/MenuMaintaner";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../state/store";
import MenuItemMaintainer from "./menu-maintainer/MenuItemMaintainer";

export function MenuPage() {

    const menus = useSelector((state: RootState) => state.restaurant.menus)

    return (
        <PaperView >
            <Container maxWidth="sm" sx={{ padding: 4}}>
                <p></p>
                <Typography variant="h5" gutterBottom sx={{ marginTop: 4, marginBottom: 4}}>
                    My fucking menu
                </Typography>
                <MenuMaintainer menus={menus}/>
                {/* <MenuItemMaintainer /> */}
                {/* <MenuTypes/> */}
                {/* <MenuTable/> */}
            </Container>
        </PaperView>
    )
}