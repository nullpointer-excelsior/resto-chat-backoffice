import { CHAT_BOT_URL } from "../config";

export default function GetChatbotUrl(restaurantId: string) {
    return `${CHAT_BOT_URL}/restaurant/${restaurantId}`
}