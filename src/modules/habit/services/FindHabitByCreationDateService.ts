import { Habit } from '@prisma/client';
import { AppError } from '../../../_shared/errors/model/AppError';
import { IHabitRepository } from '../repositories/IHabitRepository';

export class FindHabitByCreationDateService {
  constructor(private habitRepository: IHabitRepository) {}

  async execute(start_at: string): Promise<Habit> {
    const habit = await this.habitRepository.findByDate(new Date(start_at));

    if (habit === undefined) {
      throw new AppError(
        'Não foi possível encontrar um hábito com esta data de criação!',
        404,
        'find_habit_by_creation_date',
      );
    }

    return habit;
  }
}
