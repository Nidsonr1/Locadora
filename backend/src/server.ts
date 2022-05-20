require('dotenv').config()
import express from 'express';
import { emmiter } from './database';

const app = express();

emmiter.on('db_connect', () => {
    app.listen(3333, () => {
    console.log('🚀 Server is Running');
  });
});
