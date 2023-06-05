const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hello from the server side' });
});

app.post('/', (req, res) => {
  res.send('You can post on this endpoint................');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
