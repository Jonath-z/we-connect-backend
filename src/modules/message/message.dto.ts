import { IsOptional, IsString } from 'class-validator';

export class MessageDto {
  @IsString()
  @IsOptional()
  senderUsername?: string;

  @IsString()
  senderId: string;

  @IsString()
  @IsOptional()
  receiverUsername?: string;

  @IsString()
  receiverId: string;

  @IsString()
  message: string;

  @IsString()
  date: string;

  @IsString()
  time: string;
}
