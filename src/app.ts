import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import cookieParser from 'cookie-parser';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// application routes
app.use('/api/v1', router);

const test = async (req: Request, res: Response) => {
  res.send('Hello world');
};

app.get('/', test);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

// not found
app.use(notFound);

app.use(globalErrorHandler);
export default app;
