import express from 'express';
import dotenv from 'dotenv';
import { connect } from 'http2';
import connectDB from './config/connectDB';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

connectDB();

app.get('/', (_req, res) => {
  res.send('DealVault server is running!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
