import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import route from '../api';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.json());

async function connect() {
    try {
        await mongoose.connect(`${process.env.mongodbUrl}`, {
        })
            .then(() => {
                app.listen(port, () => {
                    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
                });
                console.log('Connected!')
            });

    } catch (error) {
        console.log('lỗi ');
    }
}
connect();

route(app);



