import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { EHRsService } from './ehrs.service';
import { CreateEHRDto } from './dto/create-ehr.dto';
import { UpdateEHRDto } from './dto/update-ehr.dto';
import { EHR } from './entities/ehr.entity';

@Controller('ehrs')
export class EHRsController {
  constructor(private readonly ehrsService: EHRsService) {}

  @Post()
  create(@Body() createEHRDto: CreateEHRDto) {
    return this.ehrsService.create(createEHRDto);
  }

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('limit', ParseIntPipe) limit: number = 10,
  ): Promise<EHR[]> {
    return this.ehrsService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ehrsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEHRDto: UpdateEHRDto) {
    return this.ehrsService.update(+id, updateEHRDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ehrsService.remove(+id);
  }
}
