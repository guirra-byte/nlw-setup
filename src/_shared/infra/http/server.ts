import cors from '@fastify/cors';
import { app, appRoutes } from "./routes/routes";
import { AppError } from "../../errors/model/AppError";

const _PORT = 3333;

app.register(cors);
app.register(appRoutes);

app.setErrorHandler(function (_err, request, reply){
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
