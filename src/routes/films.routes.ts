import { Router } from 'express';

import createFilmController from '../useCases/createFilm';
import getFilmController from '../useCases/getFilm';
import listFilmsController from '../useCases/listFilms';

const filmsRoutes = Router();

filmsRoutes.post('/', (request, response) => createFilmController().handle(request, response));

filmsRoutes.get('/', (request, response) => listFilmsController().handle(request, response));
filmsRoutes.get('/:idFilm', (request, response) => getFilmController().handle(request, response));

export { filmsRoutes };
