import { Test, TestingModule } from '@nestjs/testing';
import { EHRsService } from './ehrs.service';

describe('EHRsService', () => {
  let service: EHRsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EHRsService],
    }).compile();

    service = module.get<EHRsService>(EHRsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
