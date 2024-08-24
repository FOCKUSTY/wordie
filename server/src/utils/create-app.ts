import { config } from 'dotenv';
import express, { Express } from 'express';
import routes from '../routes';

config();

const createApp = (): Express => {
    const app = express();
    
    app.use(express.json());
    app.use(express.urlencoded());

    app.use((req, res, next) => setTimeout(() => next(), 700));
    app.use('/api', routes);
    
    return app;
};

export default createApp;