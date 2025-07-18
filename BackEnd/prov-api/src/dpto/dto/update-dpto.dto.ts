import { PartialType } from '@nestjs/mapped-types';
import { CreateDptoDto } from './create-dpto.dto';

export class UpdateDptoDto extends PartialType(CreateDptoDto) {
    
}
