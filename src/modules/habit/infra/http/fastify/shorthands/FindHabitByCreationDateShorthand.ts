import { RouteShorthandOptions } from 'fastify';
import { validatorObject } from '../../../../validator/validator';

export const findHabitByCreationDateShorthand: RouteShorthandOptions = {
  schema: {
    body: validatorObject.findHabitByCreationDate,
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          title: { type: 'string' },
          created_at: { type: 'date' },
        },
      },
      404: {
        type: 'object',
        properties: {
          message: { type: 'string' },
          statusCode: { type: 'number' },
          module: { type: 'string' },
        },
      },
    },
  },
};
