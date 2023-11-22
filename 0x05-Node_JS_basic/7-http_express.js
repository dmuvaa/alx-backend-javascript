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
  res.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  try {
    const data = await countStudents(database);
    if (data) {
      const formatedData = data.join('\n');
      response.send(`This is the list of our students\n${formatedData}`);
    } else {
      response.status(500).send('No student data available.');
    }
  } catch (error) {
    console.error(error);
    response.status(500).send('There was an error.');
  }
});

app.listen(port, () => {
  console.log('...');
});

module.exports = app;
