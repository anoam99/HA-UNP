import { Module } from '@nestjs/common';
import { UnipassController } from './unipass.controller';
import { UnipassService } from './unipass.service';

@Module({
  controllers: [UnipassController],
  providers: [UnipassService]
})
export class UnipassModule {}
