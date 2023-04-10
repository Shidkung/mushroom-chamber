import { Column, Entity, PrimaryGeneratedColumn ,CreateDateColumn} from 'typeorm';
@Entity()
export class login {
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
    name: 'email_address',
    nullable: false,
    default: '',
  })
  email: string;

}