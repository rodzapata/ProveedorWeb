import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm"

@Entity('prov_user')
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Unique(['username'])
    @Column({name:'username',type:'varchar', length:30, default:''})
    username: string

    @Column({name:'password', type:"varchar", length:250, default:''})
    password: string

  @Column({
    name: 'createdAt',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

    @Column({name:'authStrategy', type:"varchar", length:250, default:'', nullable:true})
    authStrategy: string

}
