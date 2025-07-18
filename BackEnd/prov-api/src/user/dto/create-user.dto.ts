import { IsNotEmpty, IsString, MaxLength } from "class-validator"
import { User } from "../entities/user.entity"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    username: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(250)
    password: string

    createdAt: Date

    @IsString()
    authStrategy: string

   constructor(entity:User){
       this.username = entity.username?.trim();
       this.password = entity.password?.trim();
   }


}
