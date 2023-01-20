import Fastify from 'fastify';
import { habitRouter } from '../../../modules/habit/infra/http/routes/habit.routes';

const app = Fastify();

app.register(habitRouter, { prefix: '/habit' });

export { app };
