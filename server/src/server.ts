import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem');

  response.json([
    'Diego',
    'cleiton',
    'henrique'
  ]);
});

app.listen(3333);