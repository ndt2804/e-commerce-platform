import { Application } from 'express';
import { loginRouter } from './login'
const route = (app: Application) => {
    app.use('/', loginRouter);
};

export default route;
