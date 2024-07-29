// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Defina suas rotas aqui
app.get('/api/hello', (req, res) => {
  res.send('Hello from Node.js!');
});

app.get('/api/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
