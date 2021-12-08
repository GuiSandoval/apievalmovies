import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => response.json({ message: 'Olá Mu2ndo' }));

app.post('/film', (request, response) => {
  console.log(request.body);
  const { name, email } = request.body;
  return response.json({ name });
});

app.listen(3333, () => console.log('Server started on port 3333'));
