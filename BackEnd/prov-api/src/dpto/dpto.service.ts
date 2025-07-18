import { Injectable } from '@nestjs/common';
import { CreateDptoDto } from './dto/create-dpto.dto';
import { UpdateDptoDto } from './dto/update-dpto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dpto } from './entities/dpto.entity';

@Injectable()
export class DptoService {
constructor(
    @InjectRepository(Dpto)
    private dptoRepository: Repository<Dpto>,
  ) {}

  create(createDptoDto: CreateDptoDto) {
    //return 'This action adds a new dpto';
    return this.dptoRepository.save(createDptoDto)
  }

  findAll() {
    return this.dptoRepository.find({ order: { codDpto: 'ASC' } });
    //return `This action returns all dpto`;
  }

  findOne(id: number) {
    //return `This action returns a #${id} dpto`;
    return this.dptoRepository.findOne({ where: { id } });
  }

  update(id: number, updateDptoDto: UpdateDptoDto) {
    return this.dptoRepository.update(id, updateDptoDto);
    //return `This action updates a #${id} dpto`;
  }

  remove(id: number) {
    return this.dptoRepository.delete(id)
    //return `This action removes a #${id} dpto`;
  }
}
