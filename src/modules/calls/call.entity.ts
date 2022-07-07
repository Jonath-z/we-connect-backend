import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('call')
export class CallEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, default: '' })
  username: string;

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
