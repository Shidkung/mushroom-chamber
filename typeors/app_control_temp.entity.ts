import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne,CreateDateColumn } from 'typeorm';
import { device } from './device.entity';
@Entity()
export class appcontrol_temp {
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
    name: 'temperature',
    nullable: false,
    default: 0,
  })
  value: number;

  @ManyToOne(() => device, (device) => device.device_id)
  device_id: device
   
}