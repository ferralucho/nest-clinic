import { Module } from '@nestjs/common';
import { EHRsService } from './ehrs.service';
import { EHRsController } from './ehrs.controller';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [LoggerModule],
  controllers: [EHRsController],
  providers: [EHRsService],
  exports: [EHRsService],
})
export class EHRsModule {}
