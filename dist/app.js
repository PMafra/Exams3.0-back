var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import './setup';
import express from 'express';
import cors from 'cors';
import middlewareError from './middlewares/errors';
import filterRouter from './routers/filterRouter';
import examRouter from './routers/examRouter';
import middlewareInfo from './middlewares/infoLogger';
import 'reflect-metadata';
import connectDatabase from './dbconfig';
const app = express();
app.use(cors());
app.use(express.json());
app.use(middlewareInfo);
app.use('/filters', filterRouter);
app.use('/exams', examRouter);
app.use(middlewareError);
export function init() {
    return __awaiter(this, void 0, void 0, function* () {
        yield connectDatabase();
    });
}
export default app;
