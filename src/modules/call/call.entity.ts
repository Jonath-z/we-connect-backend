import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import UserEntity from '../user/user.entity';

@Entity('call')
export class CallEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.calls)
  @JoinColumn()
  username: UserEntity;

  @Column({ nullable: true, default: '' })
  userProfileUrl: string;

  @Column({ nullable: true, default: '' })
  calledUsername: string;

  @Column({ nullable: true, default: '' })
  date: string;

  @Column({ nullable: true, default: '' })
  time: string;

  @Column({ nullable: false, default: false })
  missed: boolean;

  @Column({ nullable: true, default: false })
  isIncoming: boolean;

  @Column({ nullable: false, default: false })
  isVideo: boolean;
}
