import { Film } from '../../entities/Film';
import { IFilmsRepository } from '../../repositories/IFilmsRepository';

class GetFilmUseCase {
  constructor(private filmRepository: IFilmsRepository) {
  }

  async execute(idFilm): Promise<Film> {
    const singleFilm = await this.filmRepository.findByName(idFilm);

    return singleFilm;
  }
}

export { GetFilmUseCase };
