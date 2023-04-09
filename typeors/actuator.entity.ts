import { Column, Entity, PrimaryGeneratedColumn,CreateDateColumn, ManyToOne} from 'typeorm';
import { device } from './device.entity';
@Entity()
export class Actuator {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'actuator_id',
  })
  actuator_id: number;

   @CreateDateColumn({
     name:'time'
   })
  time: Date;

   @Column({
     nullable: false,
     default: 0,
   })
   light_status: number;

  @Column({
    nullable: false,
    default: 0,
  })
  air_status: number;

   @Column({
    nullable: false,
    default: 0,
  })
  power_status: number;

  @Column({
    nullable: false,
    default: 0,
  })
  humitemp_status: number;

  @ManyToOne(()=>device,(device)=>device.device_id)
  device_id:device
}