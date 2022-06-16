import { dbConnection } from '../config/default.js';
import logger from '../utils/logger.js';

//getUsers
export const getUsers = (req, res) => {
  const sql = 'SELECT * FROM EMPLOYEE';
  const query = dbConnection.query(sql, (err, results) => {
    if (err) {
      logger.error('Error', err);
    }
    console.log(results);
    res.status(200).json(results);
  });
};

//addUsers
export const addUsers = (req, res) => {
  console.log(req.body);
  if (!req.body.name || !req.body.designation) {
    throw new Error('Please Add all the fields');
  }
  const post = { name: req.body.name, designation: req.body.designation };
  const sql = 'INSERT INTO employee SET ?';
  const query = dbConnection.query(sql, post, (err) => {
    if (err) {
      logger.error('Error', err);
    }
    res.send('Employee added');
  });
};

//updateUser
export const updateUser = (req, res) => {
  if (!req.body.updateName) {
    throw new Error('Please Add updated Name');
  }
  const newName = req.body.updateName;
  const sql = `UPDATE employee SET name = '${newName}' where id = ${req.params.id}`;
  const query = dbConnection.query(sql, (err) => {
    if (err) {
      logger.error('Error', err);
    }
    res.send('Employee updated');
  });
};

//deleteUser
export const deleteUser = (req, res) => {
  const sql = `DELETE FROM employee WHERE id = ${req.params.id}`;
  const query = dbConnection.query(sql, (err) => {
    if (err) {
      logger.error('Error', err);
    }
    res.send(`Employee with the id ${req.params.id} is deleted`);
  });
};
