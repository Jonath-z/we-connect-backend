import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import UserEntity from './user.entity';

console.log('user entity', UserEntity);

@Entity('contact')
export class ContactEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user: UserEntity) => user.contacts)
  @JoinColumn()
  username: UserEntity;

  @Column({ nullable: true, default: '' })
  userAvatartUrl?: string;

  @Column({ nullable: true, default: '' })
  userCoverUrl?: string;
}
