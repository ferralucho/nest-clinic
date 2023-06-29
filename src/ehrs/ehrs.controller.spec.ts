import { Test, TestingModule } from '@nestjs/testing';
import { EHRsController } from './ehrs.controller';
import { EHRsService } from './ehrs.service';

describe('EHRsController', () => {
  let controller: EHRsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EHRsController],
      providers: [EHRsService],
    }).compile();

    controller = module.get<EHRsController>(EHRsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
