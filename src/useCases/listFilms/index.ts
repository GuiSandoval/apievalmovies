import { FilmRepository } from '../../repositories/FilmsRepository';
import { ListFilmsController } from './ListFilmsController';
import { ListFilmsUseCase } from './ListFilmsUseCase';

export default () => {
  const filmsRepository = new FilmRepository();

  const createFilmUseCase = new ListFilmsUseCase(filmsRepository);

  const createFilmController = new ListFilmsController(createFilmUseCase);

  return createFilmController;
};
