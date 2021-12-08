import {
  Column, CreateDateColumn, Entity, PrimaryColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('films')
class Film {
  @PrimaryColumn()
    id?: string;

  @Column()
    name: string;

  @Column()
    director: string;

  @Column()
    year: number;

  @Column()
    cast: string;

  @Column()
    gender:string;

  @Column()
    evaluation:number;

  @Column()
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
