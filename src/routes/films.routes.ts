import { Router } from 'express';

import { FilmRepository } from '../repositories/FilmsRepository';

const filmsRoutes = Router();

const filmsRepository = new FilmRepository();

filmsRoutes.post('/create', (request, response) => {
  const {
    name,
    director,
    cast,
    year,
    gender,
  } = request.body;

  filmsRepository.create({
    name,
    director,
    cast,
    year,
    gender,
  });

  return response.status(201).send();
});

export { filmsRoutes };
