import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity('messages')
export class Message {
  @PrimaryColumn()
  @Column()
  id: number;

  @Field()
  @Column()
  from: string;

  @Field()
  @Column()
  to: string;

  @Field()
  @Column()
  message: string;

  @Field()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  sentAt: Date;

  @Field()
  @Column()
  messageId: string;
}
