import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('example')
class Example {
  @PrimaryGeneratedColumn()

    id: number;

  @Column()
    name: string;
}

export {
  Example,
};
