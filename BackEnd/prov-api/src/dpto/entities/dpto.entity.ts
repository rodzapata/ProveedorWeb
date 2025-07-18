import { Municipio } from "src/municipio/entities/municipio.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('dian_dpto')
@Unique(['codDpto'])
export class Dpto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'codDpto', type:'varchar', length:3, default:''})
    codDpto: string;

    @Column({name:'nombreDpto', type:'varchar', length:40, default:''})
    nombreDpto:string;

    @OneToMany(() => Municipio, municipio => municipio.dpto)
    municipios: Municipio[];
}
