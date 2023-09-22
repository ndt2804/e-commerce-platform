import { Application } from 'express';
import { loginRouter } from './login'
const route = (app: Application) => {
    app.use('/api/v1/', loginRouter);
};

export default route;
