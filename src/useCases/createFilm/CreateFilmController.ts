import { Request, Response } from 'express';

import { CreateFilmUseCase } from './CreateFilmUseCase';

class CreateFilmController {
  constructor(private createFilmUseCase: CreateFilmUseCase) {

  }

  async handle(request:Request, response: Response): Promise<Response> {
    const {
      name,
      director,
      cast,
      year,
      gender,
      evaluation,
      evaluationDescription,
    } = request.body;

    await this.createFilmUseCase.execute({
      name,
      director,
      cast,
      year,
      gender,
      evaluation,
      evaluationDescription,
    });

    return response.status(201).send();
  }
}

export { CreateFilmController };
