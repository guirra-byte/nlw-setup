import { ICreateHabitDTO } from '../dtos/ICreateHabitDTO';
import { IHabitRepository } from '../repositories/IHabitRepository';

export class CreateHabitService {
  constructor(private habitRepository: IHabitRepository) {}

  async execute(habit: ICreateHabitDTO): Promise<void> {
    await this.habitRepository.create(habit);
  }
}
