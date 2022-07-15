import { EntityRepository, Repository } from 'typeorm';
import { CallEntity } from './call.entity';

@EntityRepository(CallEntity)
export class CallReposotory extends Repository<CallEntity> {}
