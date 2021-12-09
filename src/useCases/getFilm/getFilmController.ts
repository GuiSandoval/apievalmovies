import { Request, Response } from 'express';

import { GetFilmUseCase } from './getFilmUseCase';

class GetFilmController {
  constructor(private getFilmUseCase: GetFilmUseCase) {}

  async handle(request: Request, response: Response) {
    const { idFilm } = request.params;

    const getFilm = await this.getFilmUseCase.execute(idFilm);

    return response.json(getFilm);
  }
}
export { GetFilmController };
