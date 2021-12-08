import { Router } from 'express';

import { FilmRepository } from '../repositories/FilmsRepository';

const filmsRoutes = Router();

const filmsRepository = new FilmRepository();

filmsRoutes.post('/', (request, response) => {
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

filmsRoutes.get('/', (request, response) => {
  const listAll = filmsRepository.list();

  return response.json(listAll);
});

export { filmsRoutes };
