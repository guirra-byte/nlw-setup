import { FastifyRequest, FastifyReply } from 'fastify';
import { container } from '../../../../../_shared/infra/container';
import { validatorObject } from '../../../validator/validator';
import { ICreateHabitDTO } from '../../../dtos/ICreateHabitDTO';
import { Habit } from '@prisma/client';
import { Static } from '@sinclair/typebox';

const createHabitBody = validatorObject.createHabit;

export interface IRequest extends FastifyRequest {
  body: Static<typeof createHabitBody>;
}

export async function createHabitHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<Habit> {
  const { title, weekDays } = request.body;

  const createHabitService = container.resolve('createHabitService');
  const habit = await createHabitService.execute(title, weekDays);

  reply.status(200);
  return habit;
}
