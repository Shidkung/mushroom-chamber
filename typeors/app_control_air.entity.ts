import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne,CreateDateColumn } from 'typeorm';
import { device } from './device.entity';
@Entity()
export class appcontrol_air {
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
    name: 'gap',
    nullable: false,
    default: 0,
  })
  gap: number;

  @Column({
    name: 'duration',
    nullable: false,
    default: 0,
  })
  duration: number;

  @ManyToOne(() => device, (device) => device.device_id)
  device_id: device
   
}