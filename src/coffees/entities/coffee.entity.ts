import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * by default, typeorm will name the SQL table based on our class name in lowercase
 * so, the name of this sql table is coffee
 */
@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
