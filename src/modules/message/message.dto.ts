import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class MessageDto {
  @IsString()
  @IsOptional()
  sender?: string;

  @IsString()
  senderId: string;

  @IsString()
  @IsOptional()
  receiver?: string;

  @IsString()
  receiverId: string;

  @IsBoolean()
  isVideo: boolean;

  @IsBoolean()
  isImage: boolean;

  @IsString()
  message: string;

  @IsString()
  date: string;

  @IsString()
  time: string;
}
