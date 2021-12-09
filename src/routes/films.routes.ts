import { Router } from 'express';

import createFilmController from '../useCases/createFilm';
import deleteController from '../useCases/deleteFilm';
import getFilmController from '../useCases/getFilm';
import listFilmsController from '../useCases/listFilms';

const filmsRoutes = Router();

filmsRoutes.post('/', (request, response) => createFilmController().handle(request, response));

filmsRoutes.get('/', (request, response) => listFilmsController().handle(request, response));
filmsRoutes.get('/:idFilm', (request, response) => getFilmController().handle(request, response));

filmsRoutes.delete('/:idFilm', (request, response) => deleteController().handle(request, response));

export { filmsRoutes };
