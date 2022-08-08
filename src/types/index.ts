export interface UserInterface {
  userName: string;
  userPassword: string;
  userToken: string;
  userProfileUrl: string;
  userAvatarUrl: string;
}

export interface ContactInterface {
  contactName: string;
  contactId: string;
}

export interface MessageInterface {
  sender?: string;
  senderId: string;
  receiver: string;
  receiverId: string;
  message: string;
  date: string;
  time: string;
  isVideo: boolean;
  isImage: boolean;
}
