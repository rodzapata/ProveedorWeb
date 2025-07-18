import { Module } from '@nestjs/common';
import { DptoService } from './dpto.service';
import { DptoController } from './dpto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dpto } from './entities/dpto.entity';
import { Municipio } from 'src/municipio/entities/municipio.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Dpto,Municipio])],
  controllers: [DptoController],
  providers: [DptoService],
})
export class DptoModule {}
