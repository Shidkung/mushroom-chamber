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
    name: 'humi',
    type:'decimal',
    nullable: false,
    default: 0,
  })
  humi:number;

  @Column({
    name: 'temperature',
    type:'decimal',
    nullable: false,
    default: 0,
  })
  temperature: number;

  @ManyToOne(()=>device,(device)=>device.device_id)
  device_id:device
   
}