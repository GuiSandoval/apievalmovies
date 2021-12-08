import { Request, Response } from 'express';

import { ListFilmsUseCase } from './ListFilmsUseCase';

class ListFilmsController {
  constructor(private listFilmsUseCase: ListFilmsUseCase) {}

  handle(request: Request, response: Response) {
    const listAll = this.listFilmsUseCase.execute();

    return response.json(listAll);
  }
}
export { ListFilmsController };
