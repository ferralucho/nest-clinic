import { Module } from '@nestjs/common';
import { EHRsService } from './ehrs.service';
import { EHRsController } from './ehrs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conditions, EHR, EHRDiagnosisLabels } from './entities/ehr.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EHR]),
    TypeOrmModule.forFeature([EHRDiagnosisLabels]),
    TypeOrmModule.forFeature([Conditions]),
  ],
  controllers: [EHRsController],
  providers: [EHRsService],
  exports: [EHRsService],
})
export class EHRsModule {}
