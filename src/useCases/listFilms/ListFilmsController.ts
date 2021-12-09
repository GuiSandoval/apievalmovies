import { Request, Response } from 'express';

import { ListFilmsUseCase } from './ListFilmsUseCase';

class ListFilmsController {
  constructor(private listFilmsUseCase: ListFilmsUseCase) {}

  async handle(request: Request, response: Response) {
    const listAll = await this.listFilmsUseCase.execute();

    return response.json(listAll);
  }
}
export { ListFilmsController };
