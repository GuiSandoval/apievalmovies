import { Router } from 'express';

import createFilmController from '../useCases/createFilm';
import listFilmsController from '../useCases/listFilms';

const filmsRoutes = Router();

filmsRoutes.post('/', (request, response) => createFilmController().handle(request, response));

filmsRoutes.get('/', (request, response) => listFilmsController().handle(request, response));

export { filmsRoutes };
