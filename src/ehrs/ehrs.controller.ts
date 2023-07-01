import { Controller, Get, Post, Body, Param, Query, ParseIntPipe, UseGuards } from '@nestjs/common';
import { EHRsService } from './ehrs.service';
import { JwtAuthGuard } from '../auth/strategy/jwt-auth.guard';
import { EHR } from './entities/ehr.entity';
import { CreateEHRDiagnosisDTO } from './dto/create-ehr.dto';
import { RolesGuard } from 'src/auth/strategy/roles.guard';
import { Roles } from '../custom.decorator';
import { Role } from 'src/users/enums/role.enum';

@Controller('ehrs')
export class EHRsController {
  constructor(private readonly ehrsService: EHRsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.doctor)
  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10
  ): Promise<EHR[]> {
    return this.ehrsService.findAll(page, limit);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.doctor)
  @Post(':id/label')
  async labelEHR(
    @Param('id') ehrId: number,
    @Body() createEHRDiagnosisDTO: CreateEHRDiagnosisDTO
  ): Promise<void> {
    await this.ehrsService.labelEHR(ehrId, createEHRDiagnosisDTO);
  }
}
