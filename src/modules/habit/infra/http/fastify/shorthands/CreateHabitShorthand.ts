import { RouteShorthandOptions } from 'fastify';
import { validatorObject } from '../../../../validator/validator';

export const createHabitShorthand: RouteShorthandOptions = {
  schema: {
    body: validatorObject.createHabit,
    response: {
      200: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          weekDays: { type: 'array' },
        },
      },
      400: {
        type: 'object',
        properties: {
          message: { type: 'message' },
          status: { type: 'number' },
        },
      },
    },
  },
};
