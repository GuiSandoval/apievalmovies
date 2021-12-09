import { Request, Response } from 'express';

import { DeleteFilmUseCase } from './DeleteFilmUseCase';

class DeleteFilmController {
  constructor(private listFilmsUseCase: DeleteFilmUseCase) {}

  async handle(request: Request, response: Response) {
    const { idFilm } = request.params;

    try {
      const deleteResult = await this.listFilmsUseCase.execute(idFilm);

      return response.json(deleteResult);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.',
      });
    }
  }
}
export { DeleteFilmController };
