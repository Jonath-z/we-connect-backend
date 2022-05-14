import { ContactInterface, MessageInterface } from 'src/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  user_password: string;

  @Column()
  userToken: string;

  @Column()
  userProfileUrl: string;

  @Column()
  userAvatarUrl: string;

  @Column()
  contacts: ContactInterface[];

  @Column()
  blockedContact: ContactInterface[];

  @Column()
  messages: MessageInterface[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  joinedAt: Date;
}
