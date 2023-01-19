import { Habit } from '@prisma/client';
import { client } from '../../../../../_shared/infra/prisma/prismaClient';
import { ICreateHabitDTO } from '../../../dtos/ICreateHabitDTO';
import { IHabitRepository } from '../../../repositories/IHabitRepository';

export class HabitRepository implements IHabitRepository {
  private ormRepository: typeof client.habit;

  constructor() {
    this.ormRepository = client.habit;
  }

  async create(habit: ICreateHabitDTO): Promise<Habit> {
    return await this.ormRepository.create({
      data: {
        title: habit.title,
        weekDays: {
          create: habit.weekDays.map(weekDay => {
            return {
              week_day: weekDay,
            };
          }),
        },
      },
    });
  }

  async findOne(name: string): Promise<any> {
    return await this.ormRepository.findFirst({ where: { title: name } });
  }

  async findById(id: string): Promise<any> {
    return await this.ormRepository.findUnique({ where: { id } });
  }

  async findByDate(start_at: Date): Promise<any> {
    return await this.ormRepository.findMany({
      where: { created_at: start_at },
    });
  }
}
