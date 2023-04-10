import { Menu } from "./Menu";


export interface Restaurant {
    id: string;
    accountId: string;
    chatbotName: string;
    restaurantName: string;
    menuUrl: string;
    menus: Menu[]
}