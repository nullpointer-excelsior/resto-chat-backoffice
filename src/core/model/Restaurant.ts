import { Menu } from "./Menu";


export interface Restaurant {
    id: any;
    accountId: string;
    chatbotName: string;
    restaurantName: string;
    menuUrl: string;
    menus: Menu[]
}