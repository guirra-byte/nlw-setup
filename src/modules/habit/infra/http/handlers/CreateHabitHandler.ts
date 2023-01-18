import { createHabitShorthand } from '../fastify/shorthands/CreateHabitShorthand';
import { FastifyRequest } from 'fastify';
import { container } from '../../../../../_shared/infra/container';
import type { FastifyZod } from 'fastify-zod';

interface IRequest extends FastifyRequest {
  body: FastifyZod<typeof createHabitShorthand>;
}

export async function createHabitHandler(request: IRequest): Promise<void> {
  const { title, weekDays } = request.body;

  const createHabitService = container.resolve('createHabitService');
  await createHabitService.execute(title, weekDays);
}
