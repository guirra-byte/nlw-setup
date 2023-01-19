import { FastifyRequest, FastifyReply } from 'fastify';
import { container } from '../../../../../_shared/infra/container';
import { validatorObject } from '../../../validator/validator';
import { ICreateHabitDTO } from '../../../dtos/ICreateHabitDTO';
import { Habit } from '@prisma/client';

export async function createHabitHandler(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<Habit> {
  const { title, weekDays } = request.body as ICreateHabitDTO;
  const data = validatorObject.createHabit.parse({
    title: title,
    weekDays: weekDays,
  });

  const createHabitService = container.resolve('createHabitService');
  const habit = await createHabitService.execute(data.title, data.weekDays);

  reply.status(200);
  return habit;
}
