import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('schools')
class School {
  @PrimaryGeneratedColumn()

    id: number;

  @Column()
    school: string;
}

export default School;
