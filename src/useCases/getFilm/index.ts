import { FilmRepository } from '../../repositories/FilmsRepository';
import { GetFilmController } from './getFilmController';
import { GetFilmUseCase } from './getFilmUseCase';

export default () => {
  const filmsRepository = new FilmRepository();

  const createFilmUseCase = new GetFilmUseCase(filmsRepository);

  const createFilmController = new GetFilmController(createFilmUseCase);

  return createFilmController;
};
