require('dotenv').config()
import express from 'express';
import { emmiter } from './database';

const app = express();

emmiter.on('db_connect', () => {
    app.listen(3333, () => {
    console.log('✅ Database connected!')
    console.log('🚀 Server is Running');
  });
});

emmiter.on('db_failed', () => {
  console.log('Connect refused')
})
