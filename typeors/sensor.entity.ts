import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne,CreateDateColumn, Double } from 'typeorm';
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
    type:'decimal',
    nullable: false,
    default: 0,
  })
  humidity:number;

  @Column({
    name: 'temp',
    type:'decimal',
    nullable: false,
    default: 0,
  })
  temp: number;

  @ManyToOne(()=>device,(device)=>device.device_id)
  device_id:device
   
}