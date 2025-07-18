import { Test, TestingModule } from '@nestjs/testing';
import { DptoController } from './dpto.controller';
import { DptoService } from './dpto.service';

describe('DptoController', () => {
  let controller: DptoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DptoController],
      providers: [DptoService],
    }).compile();

    controller = module.get<DptoController>(DptoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
