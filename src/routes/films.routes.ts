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

  const filmAlreadyExists = filmsRepository.findByName(name);

  if (filmAlreadyExists) {
    return response.status(400).json({ message: `O Filme ${name} já Existe` });
  }

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
