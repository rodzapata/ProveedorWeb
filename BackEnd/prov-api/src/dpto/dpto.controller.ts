import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DptoService } from './dpto.service';
import { CreateDptoDto } from './dto/create-dpto.dto';
import { UpdateDptoDto } from './dto/update-dpto.dto';

@Controller('api/dpto')
export class DptoController {
  constructor(private readonly dptoService: DptoService) {}

  @Post()
  create(@Body() createDptoDto: CreateDptoDto) {
    return this.dptoService.create(createDptoDto);
  }

  @Get()
  findAll() {
    return this.dptoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.dptoService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDptoDto: UpdateDptoDto) {
    return this.dptoService.update(+id, updateDptoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.dptoService.remove(+id);
  }
}
