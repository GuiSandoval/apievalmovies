import { IFilmsRepository } from '../repositories/IFilmsRepository';

interface IRequest {
    name: string;
    director: string
    cast: string;
    year: number;
    gender: string;
    evaluation: number;
    evaluationDescription: string;
}

class CreateFilmService {
  constructor(private filmRepository: IFilmsRepository) {
  }

  async execute({
    name,
    director,
    cast,
    year,
    gender,
    evaluation,
    evaluationDescription,
  }: IRequest) {
    const filmAlreadyExists = await this.filmRepository.findByName(name);

    if (filmAlreadyExists) {
      throw new Error('O Filme ja está cadastrado');
    }

    this.filmRepository.create({
      name,
      director,
      cast,
      year,
      gender,
      evaluation,
      evaluationDescription,
    });
  }
}
export { CreateFilmService };
