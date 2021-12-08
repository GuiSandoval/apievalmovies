import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: 'Olá Mu2ndo' }));

app.listen(3333, () => console.log('Server started on port 3333'));
