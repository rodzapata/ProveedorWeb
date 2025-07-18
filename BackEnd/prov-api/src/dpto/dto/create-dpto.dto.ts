import { IsNotEmpty, IsString, Length, MaxLength } from "class-validator";

export class CreateDptoDto {
  @IsNotEmpty()
  @IsString()
  @Length(3,3)
  codDpto: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(40)
  nombreDpto: string;
}
