import './setup';
import express from 'express';
import cors from 'cors';
import middlewareError from './middlewares/errors';
import filterRouter from './routers/filterRouter';
import examRouter from './routers/examRouter';
// import middlewareInfo from './middlewares/infoLogger';
import 'reflect-metadata';
import connectDatabase from './dbconfig';

const app = express();
app.use(cors());
app.use(express.json());

// app.use(middlewareInfo);
app.use('/filters', filterRouter);
app.use('/exams', examRouter);
app.use(middlewareError);

export async function init() {
  await connectDatabase();
}

export default app;
