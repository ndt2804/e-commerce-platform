import { Application } from 'express';
import { loginRouter } from './login'
import { productRouter } from './product'
import { categoryRouter } from './category'
import { publisherRouter } from './publisher'
const route = (app: Application) => {
    app.use('/api/v1/', loginRouter);
    app.use('/api/v1/', productRouter);
    app.use('/api/v1/', categoryRouter);
    app.use('/api/v1/', publisherRouter);

};

export default route;
