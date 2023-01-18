import { app } from "../app";
import { client } from "../../client/prismaClient";
import cors from '@fastify/cors';
import fastify from 'fastify';
import { AppError } from "../../../errors/model/AppError";

const _PORT = 3333;
app.register(cors);

fastify().setErrorHandler(function (_err, request, reply){
  if(_err instanceof AppError){
    this.log.error(_err);
    return reply.status(_err.statusCode)
    .send({ message: `${_err.message} --- ${_err.module}` })
  } else {
    return reply.send(_err)
  }
});

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