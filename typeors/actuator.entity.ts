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
   light: number;

  @Column({
    nullable: false,
    default: 0,
  })
  air: boolean;

   @Column({
    nullable: false,
    default: 0,
  })
  temperature: boolean;

  @Column({
    nullable: false,
    default: 0,
  })
  humi: boolean;

  @ManyToOne(()=>device,(device)=>device.device_id)
  device_id:device
}