import express from 'express';
import userRoutes from './routes/userRoutes.js';
import logger from './utils/logger.js';

const app = express();

const PORT = process.env.PORT || 5002;

app.use(express.json());

app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Server working');
});

app.listen(PORT, () => {
  logger.info(`Server is Running at http://localhost:${PORT}`);
});
