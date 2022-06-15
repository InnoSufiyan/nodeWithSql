const express = require('express');
const mySql = require('mysql');

const app = express();

const port = 3000;

const db = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

//connect to mySql

db.connect((err) => {
  if (err) {
    throw error;
  }
  console.log('my sql connected');
});

app.get('/createdb', (req, res) => {
  let sql = 'Create database nodemysql';
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send('Database created');
  });
});

app.listen(port, () => {
  console.log(`App listening on Port ${port}`);
});
