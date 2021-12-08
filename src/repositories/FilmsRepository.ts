import { Film } from '../model/Film';

interface ICreateFilmDTO{
    name:string;
    director:string;
    cast: string[];
    year:number;
    gender:string;
    evaluation:number;
    evaluationDescription:string;
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

  findByName(name:string):Film {
    const film = this.films.find((singleFilm) => singleFilm.name === name);
    return film;
  }
}

export { FilmRepository };
