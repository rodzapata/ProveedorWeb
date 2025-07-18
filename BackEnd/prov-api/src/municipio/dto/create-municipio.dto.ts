import { IsInt, IsOptional, IsString, Length, MaxLength } from "class-validator";

export class CreateMunicipioDto {
  @IsString()  
  @Length(3,3)
  codDpto: string;

  @IsString()
  @MaxLength(5)
  codMunicipio: string;

  @IsString()
  @MaxLength(50)
  nombreCiudad: string;

  @IsOptional()
  @IsInt()
  dpto_id?: number;
}

