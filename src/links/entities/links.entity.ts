import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Converter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  source: string;

  @Column({ type: 'varchar' })
  target: string;
}
