import { Module } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { MunicipioController } from './municipio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dpto } from 'src/dpto/entities/dpto.entity';
import { Municipio } from './entities/municipio.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Dpto,Municipio])],
  controllers: [MunicipioController],
  providers: [MunicipioService],
})
export class MunicipioModule {}
