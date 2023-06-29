import { Injectable, Logger } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { CreateEHRDto } from './dto/create-ehr.dto';
import { UpdateEHRDto } from './dto/update-ehr.dto';

@Injectable()
export class EHRsService {
  constructor(private readonly logger: LoggerService = new Logger(EHRsService.name)) {}

  create(createEHRDto: CreateEHRDto) {
    return 'This action adds a new ehr';
  }

  findAll() {
    return `This action returns all ehrs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ehr`;
  }

  update(id: number, updateEHRDto: UpdateEHRDto) {
    return `This action updates a #${id} ehr`;
  }

  remove(id: number) {
    return `This action removes a #${id} ehr`;
  }
}
