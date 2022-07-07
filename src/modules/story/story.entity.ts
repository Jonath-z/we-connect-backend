import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('story')
export class StoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: '' })
  storyUrl: string;

  @Column({ nullable: true, default: '' })
  storyDescription?: string;

  @Column({ nullable: true, default: '' })
  storyType?: string;

  @Column({ nullable: true, default: '' })
  expirationDate: string;

  @Column({ nullable: false, default: false })
  allowReaction?: boolean;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.stories)
  @JoinColumn()
  storyOwner: UserEntity;
}
