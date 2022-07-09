import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity('call')
export class CallEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ nullable: true, default: '' })
  @ManyToOne(() => UserEntity, (user: UserEntity) => user.calls)
  @JoinColumn()
  username: UserEntity;

  @Column({ nullable: true, default: '' })
  userAvatarUrl: string;

  @Column({ nullable: true, default: '' })
  Date: string;

  @Column({ nullable: true, default: '' })
  time: string;

  @Column({ nullable: false, default: false })
  missed: boolean;

  @Column({ nullable: false, default: false })
  isVideo: boolean;
}
