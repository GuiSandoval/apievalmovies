import { FilmRepository } from '../../repositories/FilmsRepository';
import { DeleteFilmController } from './DeleteFilmController';
import { DeleteFilmUseCase } from './DeleteFilmUseCase';

export default () => {
  const filmsRepository = new FilmRepository();

  const createFilmUseCase = new DeleteFilmUseCase(filmsRepository);

  const createFilmController = new DeleteFilmController(createFilmUseCase);

  return createFilmController;
};
