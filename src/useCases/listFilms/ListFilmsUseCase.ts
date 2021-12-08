import { Film } from '../../entities/Film';
import { IFilmsRepository } from '../../repositories/IFilmsRepository';

class ListFilmsUseCase {
  constructor(private filmRepository: IFilmsRepository) {
  }

  async execute(): Promise<Film[]> {
    const filmAlreadyExists = await this.filmRepository.list();

    return filmAlreadyExists;
  }
}

export { ListFilmsUseCase };
