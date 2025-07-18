import { Dpto } from "src/dpto/entities/dpto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('dian_municipio')
export class Municipio {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:'codDpto', type:'varchar', length:3, default:''})
    codDpto:string;

    @Column({name:'codMunicipio', type:'varchar', length:5, default:''})
    codMunicipio:string;

    @Column({name:'nombreCiudad',type:'varchar',length:50, default:''})
    nombreCiudad:string;

    @Column()
    dpto_id:number;

    @ManyToOne(() => Dpto, dpto => dpto.municipios)
    @JoinColumn({ name: 'dpto_id' })
    dpto: Dpto;


}
