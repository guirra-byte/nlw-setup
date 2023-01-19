import { createHabitHandler } from '../handlers/CreateHabitHandler';
import { createHabitShorthand } from '../fastify/shorthands/CreateHabitShorthand';
import { findHabitByCreationDateHandler } from '../handlers/FindHabitByCreationDateHandler';
import { findHabitByCreationDateShorthand } from '../fastify/shorthands/FindHabitByCreationDateShorthand';
import { FastifyInstance } from 'fastify';

export async function createHabitRouter(app: FastifyInstance) {
  app.post('/', createHabitShorthand, createHabitHandler);

  app.get(
    '/createdAt',
    findHabitByCreationDateShorthand,
    findHabitByCreationDateHandler,
  );
}
