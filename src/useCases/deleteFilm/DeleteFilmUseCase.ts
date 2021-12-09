import { DeleteResult } from 'typeorm';

import { IFilmsRepository } from '../../repositories/IFilmsRepository';

class DeleteFilmUseCase {
  constructor(private filmRepository: IFilmsRepository) {
  }

  async execute(id): Promise<any> {
    const filmDelete = await this.filmRepository.deleteById(id);

    if (filmDelete.affected === 0) {
      throw new Error('Film not found');
    }

    return { message: 'Film deleted' };
  }
}

export { DeleteFilmUseCase };
