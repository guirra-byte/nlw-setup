import { RouteShorthandOptions, FastifySchema } from 'fastify';
import { validatorObject } from '../../../../validator/validator';

export const findHabitByCreationDateSchemaObject: FastifySchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        start_at: { type: 'string' },
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
};

export const findHabitByCreationDateShorthand: RouteShorthandOptions = {
  schema: {
    body: validatorObject.findHabitByCreationDate,
    response: findHabitByCreationDateSchemaObject,
  },
};
