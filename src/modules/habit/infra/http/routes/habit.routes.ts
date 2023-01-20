import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { ICreateHabitDTO } from '@modules/habit/dtos/ICreateHabitDTO';
import { client } from '_shared/infra/prisma/prismaClient';
import { Habit } from '@prisma/client';
import dayjs from 'dayjs';

export async function habitRouter(app: FastifyInstance) {
  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const { title, weekDays } = request.body as ICreateHabitDTO;

    const createHabitService = await client.habit.create({
      data: {
        title: title,
        weekDays: {
          create: weekDays.map(weekDay => {
            return { week_day: weekDay };
          }),
        },
      },
    });

    reply.status(201);
    reply.send(createHabitService);
  });

  app.get('/date', async (request: FastifyRequest, reply: FastifyReply) => {
    const created_at = request.body;

    const habit = await client.habit.findMany({
      where: {
        created_at,
      },
    });

    reply.status(200);
    reply.send(habit);
  });

  app.get(
    '/:id/toggle/',
    async (request: FastifyRequest, repl: FastifyReply) => {
      const habit_id = request.params as string;

      const today = dayjs().startOf('day').toDate();

      const [habits, day] = await Promise.all([
        await client.habit.findMany(),
        await client.day.findUnique({ where: { date: today } }),
      ]);

      const habit = habits.find(habit => habit.id === habit_id);
      const similarHabits = habits.filter(habit => habit.title === habit.title);

      if (!day) {
        await client.day.create({ data: { date: today } });
      }
    },
  );
}
