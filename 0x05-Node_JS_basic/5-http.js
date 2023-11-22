const http = require('http');
const countStudents = require('./3-read_file_async');

const port = '1245';

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    try {
      const database = process.argv[2];
      const studentData = await countStudents(database);
      studentData.forEach((data) => {
        res.write(`${data}\n`);
      });
      res.end();
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not Found');
  }
});

app.listen(port, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
