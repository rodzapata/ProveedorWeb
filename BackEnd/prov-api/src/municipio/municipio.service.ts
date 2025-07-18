import { Injectable } from '@nestjs/common';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { MunicipioByDptoDto } from './dto/municipio-by-dpto.dot';
import { Municipio } from './entities/municipio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MunicipioService {
  constructor(
      @InjectRepository(Municipio)
      private municipioRepository: Repository<Municipio>,
    ) {}

  create(createMunicipioDto: CreateMunicipioDto) {
    return this.municipioRepository.save(createMunicipioDto);
  }

  findAll() {
    //return `This action returns all municipio`;
    return this.municipioRepository.find({ order: { codMunicipio:'ASC'}} );
  }

  findOne(id: number) {
    return this.municipioRepository.findOne( {where: {id} } )
  }

async findByDptoId(dptoId: number): Promise<Municipio[]> {
    return await this.municipioRepository.find({
      where: { dpto_id: dptoId },
      select: ['codMunicipio', 'nombreCiudad', 'id', 'dpto_id'],
    });
  }  

 // dian-municipio.service.ts
async findByDptoIdWithJoin(dptoId: number): Promise<MunicipioByDptoDto[]> {
  const rows= await this.municipioRepository
    .createQueryBuilder('m')
    .leftJoinAndSelect('m.dpto', 'd')
    .select([
      'm.codMunicipio',
      'm.nombreCiudad',
      'm.id',
      'm.dpto_id',
      'd.nombreDpto',
    ])
    .where('m.dpto_id = :dptoId', { dptoId })
    .getRawMany(); // Devuelve los campos planos como en SQL

     return rows.map(row => ({
      codMunicipio: row.m_codMunicipio,
      nombreCiudad: row.m_nombreCiudad,
      id: row.m_id,
      dpto_id: row.m_dpto_id,
      nombreDpto: row.d_nombreDpto,
    }));
}


  update(id: number, updateMunicipioDto: UpdateMunicipioDto) {
    return this.municipioRepository.update(id, updateMunicipioDto)
  }

  remove(id: number) {
    return this.municipioRepository.delete(id)
  }
}
