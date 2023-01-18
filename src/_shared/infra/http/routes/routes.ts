import Fastify, { FastifyInstance } from 'fastify';
import { client } from '../../prisma/prismaClient';
import z from 'zod';

export const app = Fastify();

export const appRoutes = (app: FastifyInstance) => {
  app.post('/habit', async () => {
    const habit = {
      title: 'Study the Bible',
    };

    await client.habit.create({ data: { title: habit.title } });
  });

  app.get('/habit/:id', async () => {
    const id = '';

    const findHabit = await client.habit.findUnique({ where: { id: id } });
    return findHabit;
  });
};
