import routes from './routes';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json());
app.use('/api', routes);

const PORT = 3777;
app.listen(PORT, async () => {
    console.log('Server ready!');
    const mongoConnection = await mongoose.connect('mongodb://localhost/nodejs-auth');
    console.log('Database ready!');

    console.log(`Listening on port ${PORT}`);
});