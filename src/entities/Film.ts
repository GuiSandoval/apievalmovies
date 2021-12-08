import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('film')
class Film {
  @PrimaryColumn()
    id?: string;

  @Column('title')
    name: string;

  @Column()
    director: string;

  @Column()
    year: number;

  @Column()
    cast: string[];

  @Column()
    gender:string;

  @Column()
    evaluation:string;

  @Column('evaluation_description')
    evaluationDescription:string;

  @CreateDateColumn()
    created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Film };
