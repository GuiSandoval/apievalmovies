import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';

const filmsRoutes = Router();

const films = [];

filmsRoutes.post('/create', (request, response) => {
  const {
    name,
    director,
    cast,
    year,
    gender,
  } = request.body;

  const film = {
    id: uuidV4(),
    name,
    director,
    cast,
    year,
    gender,
  };

  films.push(film);

  return response.status(201).send();
});

export { filmsRoutes };
