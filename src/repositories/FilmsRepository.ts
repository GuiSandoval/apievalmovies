import { Film } from '../model/Film';

interface ICreateFilmDTO{
    name:string;
    director:string;
    cast: string[];
    year:number;
    gender:string;
}

class FilmRepository {
  private films: Film[];

  constructor() {
    this.films = [];
  }

  create({
    name,
    director,
    cast,
    year,
    gender,
  }: ICreateFilmDTO): void {
    const film = new Film();

    Object.assign(film, {
      name,
      director,
      cast,
      year,
      gender,
      created_at: new Date(),
    });

    this.films.push(film);
  }

  list():Film[] {
    return this.films;
  }
}

export { FilmRepository };
