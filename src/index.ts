import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import { createClient } from '@supabase/supabase-js'
dotenv.config();

console.log(process.env.supabaseUrl);

const supabase = createClient(`${process.env.supabaseUrl}`, `${process.env.supabaseKey}`)
console.log(supabase);
const app: Express = express();
const port = process.env.PORT;
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});


