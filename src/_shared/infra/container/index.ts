import { createContainer, asClass } from 'awilix';
import { HabitRepository } from '../../../modules/habit/infra/prisma/repositories/HabitRepository';
import { CreateHabitService } from '../../../modules/habit/services/CreateHabitService';
import { FindHabitByCreationDateService } from '../../../modules/habit/services/FindHabitByCreationDateService';

const container = createContainer({ injectionMode: 'CLASSIC' });

container.register(
  'habitRepository',
  asClass(HabitRepository, { lifetime: 'SINGLETON' }),
);

container.register(
  'createHabitService',
  asClass(CreateHabitService, { lifetime: 'SINGLETON' }),
);

container.register(
  'findHabitByCreationDateService',
  asClass(FindHabitByCreationDateService, { lifetime: 'SINGLETON' }),
);

export { container };
