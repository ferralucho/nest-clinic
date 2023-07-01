import { Module } from '@nestjs/common';
import { EHRsService } from './ehrs.service';
import { EHRsController } from './ehrs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conditions, EHR, EHRDiagnosisLabels } from './entities/ehr.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth.guard';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EHR]),
    TypeOrmModule.forFeature([EHRDiagnosisLabels]),
    TypeOrmModule.forFeature([Conditions]),
    AuthModule,
  ],
  controllers: [EHRsController],
  providers: [EHRsService],
  exports: [EHRsService],
})
export class EHRsModule {}
