import { RouteShorthandOptions, FastifySchema } from 'fastify';
import { validatorObject } from '../../../../validator/validator';

export const habitSchemaObject: FastifySchema = {
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
        message: { type: 'string' },
        statusCode: { type: 'number' },
        module: { type: 'string' },
      },
    },
  },
};

export const createHabitShorthand: RouteShorthandOptions = {
  schema: {
    body: validatorObject.createHabit,
    response: habitSchemaObject.response,
  },
};
