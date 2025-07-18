import { Test, TestingModule } from '@nestjs/testing';
import { DptoService } from './dpto.service';

describe('DptoService', () => {
  let service: DptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DptoService],
    }).compile();

    service = module.get<DptoService>(DptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
