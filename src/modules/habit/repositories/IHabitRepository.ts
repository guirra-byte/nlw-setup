import { Habit } from '@prisma/client';
import { ICreateHabitDTO } from '../dtos/ICreateHabitDTO';

export interface IHabitRepository {
  create(habit: ICreateHabitDTO): Promise<Habit>;
  findOne(name: string): Promise<Habit>;
  findById(id: string): Promise<Habit>;
  findByDate(start_at: Date): Promise<Habit>;
}
