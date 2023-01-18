import { ICreateHabitDTO } from '../dtos/ICreateHabitDTO';

export interface IHabitRepository {
  create(habit: ICreateHabitDTO): Promise<void>;
  findOne(name: string): Promise<void>;
  findById(id: string): Promise<void>;
  findByDate(start_at: Date): Promise<void>;
}
