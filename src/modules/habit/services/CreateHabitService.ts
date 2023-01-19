import { Habit } from '@prisma/client';
import { ICreateHabitDTO } from '../dtos/ICreateHabitDTO';
import { IHabitRepository } from '../repositories/IHabitRepository';

export class CreateHabitService {
  constructor(private habitRepository: IHabitRepository) {}

  async execute(habit: ICreateHabitDTO): Promise<Habit> {
    return await this.habitRepository.create(habit);
  }
}
