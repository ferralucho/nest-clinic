import { Module } from '@nestjs/common';
import { EHRsService } from './ehrs.service';
import { EHRsController } from './ehrs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EHR } from './entities/ehr.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EHR])],
  controllers: [EHRsController],
  providers: [EHRsService],
  exports: [EHRsService],
})
export class EHRsModule {}
