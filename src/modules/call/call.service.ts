import { Injectable } from '@nestjs/common';
import { CallReposotory } from './call.repository';

@Injectable()
export class CallService {
  constructor(public readonly callRepository: CallReposotory) {}
}
