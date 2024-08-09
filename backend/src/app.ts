import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import chartRoutes from './routes/chartRoutes';
import { sequelize } from './models';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/chats', chartRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
