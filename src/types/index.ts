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
  from: string;
  to: string;
  message: string;
  messageId: string;
}
