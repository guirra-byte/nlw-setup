import { Habit } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';
import { container } from '../../../../../_shared/infra/container';

interface IRequest {
  start_at: Date;
}

export async function findHabitByCreationDateHandler(
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<Habit> {
  const { start_at } = request.body as IRequest;

  const findHabitByCreationDateService = container.resolve(
    'findHabitByCreationDateService',
  );

  const habit = await findHabitByCreationDateService.execute(start_at);

  reply.status(200);
  return habit;
}
