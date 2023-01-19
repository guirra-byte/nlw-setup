import { z } from 'zod';

const validatorObject = {
  createHabit: z.object({
    title: z.string(),
    weekDays: z.array(z.number().min(0).max(6)),
  }),
  findHabitByCreationDate: z.object({
    start_at: z.date(),
  }),
};

export { validatorObject };
