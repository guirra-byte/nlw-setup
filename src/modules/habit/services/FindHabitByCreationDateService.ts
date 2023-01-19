import { Habit } from '@prisma/client';
import { AppError } from '../../../_shared/errors/model/AppError';
import { IHabitRepository } from '../repositories/IHabitRepository';

export class FindHabitByCreationDateService {
  constructor(private habitRepository: IHabitRepository) {}

  async execute(start_at: Date): Promise<Habit> {
    const habit = await this.habitRepository.findByDate(start_at);

    if (!habit) {
      throw new AppError(
        'Não foi possível encontrar um hábito com esta data de criação!',
        404,
        'find_habit_by_creation_date',
      );
    }

    return habit;
  }
}
