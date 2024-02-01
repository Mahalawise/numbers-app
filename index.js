const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/numbers-app/index.html');
});

app.get('/sum', (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    return res.status(400).send('Please provide both numbers.');
  }

  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);

  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    return res.status(400).send('Invalid numbers provided.');
  }

  const sum = parsedNum1 + parsedNum2;

  res.send(`${sum}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});