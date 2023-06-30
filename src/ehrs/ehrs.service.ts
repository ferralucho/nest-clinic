import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEHRDto } from './dto/create-ehr.dto';
import { UpdateEHRDto } from './dto/update-ehr.dto';
import { EHR } from './entities/ehr.entity';

@Injectable()
export class EHRsService {
  constructor(@InjectRepository(EHR) private readonly ehrRepository: Repository<EHR>) {}

  create(createEHRDto: CreateEHRDto) {
    return 'This action adds a new ehr';
  }

  async findAll(page: number = 1, limit: number = 10): Promise<EHR[]> {
    const skip = (page - 1) * limit;
    return this.ehrRepository.find({
      skip,
      take: limit,
    });
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
