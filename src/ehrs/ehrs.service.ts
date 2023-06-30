import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEHRDiagnosisDTO } from './dto/create-ehr.dto';
import { Conditions, EHR, EHRDiagnosisLabels } from './entities/ehr.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class EHRsService {
  constructor(@InjectRepository(EHR) private readonly ehrRepository: Repository<EHR>,
  @InjectRepository(EHRDiagnosisLabels) private readonly ehrDiagnosisRepository: Repository<EHRDiagnosisLabels>,
  @InjectRepository(Conditions)
    private readonly conditionsRepository: Repository<Conditions>) {}

  async findAll(page: number = 1, limit: number = 10): Promise<EHR[]> {
    const skip = (page - 1) * limit;
    return this.ehrRepository.find({
      skip,
      take: limit,
    });
  }

  async labelEHR(ehrId: number, createEHRDiagnosisDTO: CreateEHRDiagnosisDTO): Promise<void> {
    const ehr = await this.ehrRepository.findOne(ehrId);
    if (!ehr) {
      throw new NotFoundException('EHR not found');
    }

    const condition = await this.conditionsRepository.findOne({
      diagnosticCode: createEHRDiagnosisDTO.diagnosticCode,
    });
    if (!condition) {
      throw new NotFoundException('Condition not found');
    }

    await this.ehrDiagnosisRepository.save({
      condition: condition,
      doctor: {id: 1} as User,
      ehr: ehr
    });
  }
}
