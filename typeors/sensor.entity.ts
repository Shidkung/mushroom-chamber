import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne,CreateDateColumn } from 'typeorm';
import { device } from './device.entity';
@Entity()
export class sensor {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @CreateDateColumn({
    name:'time'
  })
  created_at: Date;


  @Column({
    name: 'humidity',
    nullable: false,
    default: 0,
  })
  humidity: number;

  @Column({
    name: 'temp',
    nullable: false,
    default: 0,
  })
  temp: number;

  @ManyToOne(()=>device,(device)=>device.device_id)
  device_id:device
   
}