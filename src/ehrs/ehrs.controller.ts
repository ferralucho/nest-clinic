import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { EHRsService } from './ehrs.service';
import { EHR } from './entities/ehr.entity';
import { CreateEHRDiagnosisDTO } from './dto/create-ehr.dto';

@Controller('ehrs')
export class EHRsController {
  constructor(private readonly ehrsService: EHRsService) {}

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10
  ): Promise<EHR[]> {
    return this.ehrsService.findAll(page, limit);
  }

  @Post(':id/label')
  async labelEHR(
    @Param('id') ehrId: number,
    @Body() createEHRDiagnosisDTO: CreateEHRDiagnosisDTO
  ): Promise<void> {
    await this.ehrsService.labelEHR(ehrId, createEHRDiagnosisDTO);
  }
}
