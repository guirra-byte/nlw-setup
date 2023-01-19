import Fastify, { FastifyInstance } from 'fastify';
import { createHabitRouter } from '../../../../modules/habit/infra/http/routes/habit.routes';

export const app = Fastify();

export const appRoutes = (app: FastifyInstance) => {
  app.register(createHabitRouter, { prefix: '/habit' });
};
