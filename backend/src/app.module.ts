import { Module } from '@nestjs/common';
import { UnipassModule } from './unipass/unipass.module';

@Module({
  imports: [UnipassModule],
})
export class AppModule {}
