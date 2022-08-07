import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { DeepPartial } from 'typeorm';
import UserEntity from '../user/user.entity';

export class StoryDto {
  @IsString()
  storyUrl: string;

  @IsString()
  @IsOptional()
  storyDescription?: string;

  @IsString()
  @IsOptional()
  storyType?: string;

  @IsString()
  expirationDate: string;

  @IsBoolean()
  @IsOptional()
  allowReaction?: boolean;

  @IsString()
  storyOwner: DeepPartial<UserEntity>;
}
