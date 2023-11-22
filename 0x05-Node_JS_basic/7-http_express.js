const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

if (!database) {
  console.error('Database path not provided. Usage: node 6-http_express.js <path_to_database>');
  process.exit(1);
}

const app = express();
const port = '1245';

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(database);
    if (data) {
      res.set('Content-Type', 'text/plain');
      const formattedData = data.join('\n');
      res.send(`This is the list of our students\n${formattedData}`);
    } else {
      res.status(500).send('No student data available.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('There was an error.');
  }
});

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
