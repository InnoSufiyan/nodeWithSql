const express = require('express');
const mySql = require('mysql');

const app = express();

const port = 3000;

const db = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql',
});

//connect to mySql

db.connect((err) => {
  if (err) {
    throw error;
  }
  console.log('my sql connected');
});

// create database in mySql

app.get('/createdb', (req, res) => {
  let sql = 'Create database nodemysql';
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send('Database created');
  });
});

// create Table in mySql

app.get('/createemployee', (req, res) => {
  let sql =
    'Create table employee(id int Auto_Increment, name VARCHAR(255), designation VARCHAR(255), Primary Key(id))';
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send('Employee Table created');
  });
});

// Add employee in mySql

app.get('/employee1', (req, res) => {
  let post = { name: 'Sufiyan', designation: 'Animator' };
  let sql = 'Insert into employee SET ?';
  let query = db.query(sql, post, (err) => {
    if (err) {
      throw err;
    }
    res.send('Employee added');
  });
});

app.get('/employee2', (req, res) => {
  let post = { name: 'Usman', designation: 'Developer' };
  let sql = 'Insert into employee SET ?';
  let query = db.query(sql, post, (err) => {
    if (err) {
      throw err;
    }
    res.send('Employee added');
  });
});

// get employees in sql

app.get('/getemployee', (req, res) => {
  let sql = 'Select * from employee';
  let query = db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.send('Employee detail fetched, check console');
  });
});

//update employee by id

app.get('/updateemployee/:id', (req, res) => {
  let newDesignation = 'Developer';
  let sql = `Update employee set designation = '${newDesignation}' where id = ${req.params.id}`;
  let query = db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send('Employee updated');
  });
});

//delete employee by id

app.get('/deleteemployee/:id', (req, res) => {
  let sql = `Delete from employee where id = ${req.params.id}`;
  let query = db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send(`Employee with the id ${req.params.id} is deleted`);
  });
});

app.listen(port, () => {
  console.log(`App listening on Port ${port}`);
});
