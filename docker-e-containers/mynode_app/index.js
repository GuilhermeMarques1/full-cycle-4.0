const express = require('express');
const app = express();
const port = 3000;
const message = 'Hello world'

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(port, () => {
  console.log(`App is runnning on port ${port}`);
});
