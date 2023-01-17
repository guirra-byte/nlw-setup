import { app } from "./routes/app";
import { client } from "../client/prismaClient";
import cors from '@fastify/cors';

const _PORT = 3333;
app.register(cors);

app.listen({ port: _PORT, host: 'localhost' })
.then(() => console.log('The Server already is running!'));

app.post('/habit', async () => {
  const habit = {
    title: 'Study the Bible',
  }

  await client.habit.create({ data: { title: habit.title } });
});

app.get('/habit/:id', async () => {
  const id = '';

  const findHabit = await client.habit.findUnique({ where: { id: id } });
  return findHabit; 
});