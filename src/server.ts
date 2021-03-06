import cors from 'cors';
import express from 'express';
import './database';

import { filmsRoutes } from './routes/films.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/films', filmsRoutes);

app.listen(3333, () => console.log('Server started on port 3333'));
