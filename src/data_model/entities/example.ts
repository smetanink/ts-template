import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'example' })
export class Example {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: 'data', type: 'character varying', nullable: true, length: 1000 })
  data!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}

export type ExampleDto = Partial<Example>;
