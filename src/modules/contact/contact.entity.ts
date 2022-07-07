import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('contact')
export class ContactEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //   @Column({ nullable: true, default: '' })
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.contacts)
  @JoinColumn()
  username: string;

  @Column({ nullable: true, default: '' })
  userAvatartUrl?: string;

  @Column({ nullable: true, default: '' })
  userCoverUrl?: string;

  //   @Column({ nullable: true, default: '' })
  //   lastMessage: TMessage;
}
