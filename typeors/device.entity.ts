import { Column, Entity, PrimaryGeneratedColumn ,ManyToOne,CreateDateColumn } from 'typeorm';
import { Users } from './users.entity';
@Entity()
export class device {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'device_id',
  })
  device_id: number;

  @CreateDateColumn({
    name:'time'
  })
  created_at: Date;


  @Column({
    name: 'client_id',
    nullable: false,
    default: '',
  })
  client_id: string;

  @ManyToOne(() => Users, (users) => users.user_id)
  user_id: Users
   
}