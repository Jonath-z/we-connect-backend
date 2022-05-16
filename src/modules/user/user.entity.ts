import { ContactInterface, MessageInterface } from 'src/types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  userPassword: string;

  @Column()
  userToken: string;

  @Column()
  userProfileUrl: string;

  @Column()
  userAvatarUrl: string;

  @Column('simple-array', { default: '' })
  contacts: ContactInterface[];

  @Column('simple-array', { default: '' })
  blockedContact: ContactInterface[];

  @Column('simple-array', { default: '' })
  messages: MessageInterface[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  joinedAt: Date;
}
