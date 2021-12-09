import { DeleteResult } from 'typeorm';

import { Film } from '../entities/Film';

interface ICreateFilmDTO{
    name:string;
    director:string;
    cast: string;
    year:number;
    gender:string;
    evaluation:number;
    evaluationDescription:string;
}

interface IFilmsRepository {
    findByName(name: string): Promise<Film>;
    findById(id: string): Promise<Film>;
    deleteById(id: string): Promise<DeleteResult>;
    list(): Promise<Film[]>;
    create({
      name,
      director,
      cast,
      year,
      gender,
      evaluation,
      evaluationDescription,
    }:ICreateFilmDTO): Promise<void>;
}

export { ICreateFilmDTO, IFilmsRepository };
