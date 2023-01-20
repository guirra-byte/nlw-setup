import { z } from 'zod';
import { Type } from '@sinclair/typebox';

const validatorObject = {
  createHabit: Type.Object({
    title: Type.String(),
    weekDays: Type.Array(Type.Number()),
  }),
  findHabitByCreationDate: Type.Object({
    start_at: Type.Date(),
  }),
};

export { validatorObject };
