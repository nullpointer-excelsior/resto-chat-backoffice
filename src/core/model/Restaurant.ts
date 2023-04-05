export interface Item {
    name: string;
    price: string;
    description: string;
}

export interface Menu {
    category: string;
    items: Item[]
}

export interface Restaurant {
    id: string;
    accountId: string;
    callEndpoint: string;
    chatbotName: string;
    restaurantName: string;
    menuUrl: string;
    menus: Menu[]
}