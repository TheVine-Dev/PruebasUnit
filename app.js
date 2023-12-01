const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Saul Soto!!');
});

app.listen(port, () => {
  console.log(`App viendo el puerto: http://localhost:${port}`);
});
