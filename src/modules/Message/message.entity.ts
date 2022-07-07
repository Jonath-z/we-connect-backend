import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('messages')
export class MessageEnity {
  @PrimaryGeneratedColumn()
  id: number;

  //   @Column({ nullable: true, default: '' })
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.messages)
  @JoinColumn()
  senderUsername: string;

  @Column({ nullable: true, default: '' })
  senderId: string;

  @Column({ nullable: true, default: '' })
  receiverUsername: string;

  @Column({ nullable: true, default: '' })
  receiverId: string;

  @Column({ nullable: true, default: '' })
  message: string;

  @Column({ nullable: true, default: '' })
  date: string;

  @Column({ nullable: true, default: '' })
  time: string;
}
