import mySql from 'mysql';
import logger from '../utils/logger.js';

export const dbConnection = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql',
});

dbConnection.connect((err) => {
  if (err) {
    logger.error('Error', error);
  }
  logger.info('Connection to DB is established');
});
