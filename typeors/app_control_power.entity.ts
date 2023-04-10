import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne,CreateDateColumn } from 'typeorm';
import { device } from './device.entity';
@Entity()
export class appcontrol_power {
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
    name: 'power',
    nullable: false,
    default: 0,
  })
  value: number;

  @ManyToOne(() => device, (device) => device.device_id)
  device_id: device
   
}