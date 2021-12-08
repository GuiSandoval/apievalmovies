import { Router } from 'express';

import { Film } from '../model/Film';

const filmsRoutes = Router();

const films: Film[] = [];

filmsRoutes.post('/create', (request, response) => {
  const {
    name,
    director,
    cast,
    year,
    gender,
  } = request.body;

  const film = new Film();

  Object.assign(film, {
    name,
    director,
    cast,
    year,
    gender,
    created_at: new Date(),
  });

  films.push(film);

  return response.status(201).json({ film });
});

export { filmsRoutes };
