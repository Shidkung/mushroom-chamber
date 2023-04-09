import { Column, Entity, PrimaryGeneratedColumn ,OneToMany,CreateDateColumn} from 'typeorm';
import { device } from './device.entity';
@Entity()
export class Users {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
  })
  user_id: number;

  @CreateDateColumn({
    name:'time'
  })
  created_at: Date;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  password: string;

}