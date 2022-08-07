import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UserEntity from '../user/user.entity';

@Entity('messages')
export class MessageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.messages)
  @JoinColumn()
  sender: string;

  @Column({ nullable: true, default: '', type: 'varchar' })
  senderId: string;

  @Column({ nullable: true, default: '', type: 'varchar' })
  receiver: string;

  @Column({ nullable: true, default: '', type: 'varchar' })
  receiverId: string;

  @Column({ nullable: true, default: '', type: 'varchar' })
  message: string;

  @Column({ nullable: true, default: '', type: 'varchar' })
  date: string;

  @Column({ nullable: true, default: '', type: 'varchar' })
  time: string;
}
