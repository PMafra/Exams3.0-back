var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getConnectionManager } from 'typeorm';
import { logger } from './utils/logger';
if (process.env.NODE_ENV === 'production' && process.env.DATABASE_URL.indexOf('sslmode=require') === -1) {
    process.env.DATABASE_URL += '?sslmode=require';
}
export default function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const connectionManager = yield getConnectionManager();
        const connection = connectionManager.create({
            name: 'default',
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [`${process.env.NODE_ENV === 'production' ? 'dist' : 'src'}/entities/*.*`],
            ssl: process.env.NODE_ENV === 'production',
        });
        yield connection.connect();
        logger.info(`Connected to db ${process.env.DATABASE_URL.split('/').splice(-1)}`);
        return connection;
    });
}
