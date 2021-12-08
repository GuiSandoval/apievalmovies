import { getRepository, Repository } from 'typeorm';

import { Film } from '../entities/Film';
import { ICreateFilmDTO, IFilmsRepository } from './IFilmsRepository';

class FilmRepository implements IFilmsRepository {
  private repository: Repository<Film>;

  constructor() {
    this.repository = getRepository(Film);
  }

  async create({
    name,
    director,
    cast,
    year,
    gender,
    evaluation,
    evaluationDescription,
  }: ICreateFilmDTO): Promise<void> {
    const film = this.repository.create({
      name,
      director,
      cast,
      year,
      gender,
      evaluation,
      evaluationDescription,
    });

    await this.repository.save(film);
  }

  async list():Promise<Film[]> {
    const listFilms = await this.repository.find();

    return listFilms;
  }

  async findByName(name:string):Promise<Film> {
    const film = await this.repository.findOne({ name });
    return film;
  }
}

export { FilmRepository };
