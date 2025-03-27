import type { ChatRoomTypes } from "@/pages/HomePage/types/homeDataTypes";
import type { SelectedItemTypes } from "@/pages/HomePage/types/selectedItemTypes";

export function getSelectedChat(
  selectedItem: SelectedItemTypes,
  homeGroupRooms: ChatRoomTypes[] | undefined,
  homeMeetingRooms: ChatRoomTypes[] | undefined
): ChatRoomTypes | null {
  if (selectedItem.type === "meetingChatRoom") {
    return homeMeetingRooms?.find((chat) => chat.id === Number(selectedItem.id)) || null;
  }
  if (selectedItem.type === "groupChatRoom") {
    return homeGroupRooms?.find((chat) => chat.id === Number(selectedItem.id)) || null;
  }
  return null;
}
