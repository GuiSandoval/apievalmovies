import { FilmRepository } from '../../repositories/FilmsRepository';
import { CreateFilmController } from './CreateFilmController';
import { CreateFilmUseCase } from './CreateFilmUseCase';

export default () => {
  const filmsRepository = new FilmRepository();

  const createFilmUseCase = new CreateFilmUseCase(filmsRepository);

  const createFilmController = new CreateFilmController(createFilmUseCase);

  return createFilmController;
};
