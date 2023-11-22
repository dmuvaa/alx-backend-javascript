#!/usr/bin/env node

const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n');

      const students = [];
      const response = [];
      let msg = '';

      for (const line of lines) {
        const [firstname, lastname, age, field] = line.split(',');
        if (firstname && lastname && age && field && field !== 'field') {
          students.push({
            firstname, lastname, age, field,
          });
        }
      }

      const studentCount = students.length;
      msg = `Number of students: ${studentCount}`;
      console.log(msg);
      response.push(msg);

      const fields = {};

      for (const student of students) {
        if (!fields[student.field]) {
          fields[student.field] = [];
        }
        fields[student.field].push(student.firstname);
      }

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          msg = `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
          console.log(msg);
          response.push(msg);
        }
      }

      resolve(response);
    });
  });
}

module.exports = countStudents;
