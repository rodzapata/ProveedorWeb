import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MunicipioService } from './municipio.service';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';

@Controller('api/municipio')
export class MunicipioController {
  constructor(private readonly municipioService: MunicipioService) { }

  @Post()
  create(@Body() createMunicipioDto: CreateMunicipioDto) {
    return this.municipioService.create(createMunicipioDto);
  }

  @Get()
  findAll() {
    return this.municipioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.municipioService.findOne(+id);
  }

  @Get('dptoid/:id')
  findByDptoId(@Param('id', ParseIntPipe) dptoId: number) {
    return this.municipioService.findByDptoId(+dptoId);
  }

  // dian-municipio.controller.ts
  @Get('dpto/:id')
  async getByDptoId(@Param('id', ParseIntPipe) dptoId: number) {
    return this.municipioService.findByDptoIdWithJoin(dptoId);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMunicipioDto: UpdateMunicipioDto) {
    return this.municipioService.update(+id, updateMunicipioDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.municipioService.remove(+id);
  }
}
