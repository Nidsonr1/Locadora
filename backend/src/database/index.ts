import { createConnection, getConnectionOptions } from 'typeorm';
import { EventEmitter } from 'events'

const emmiter = new EventEmitter();

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'db_locadora'; 
  createConnection({
    ...options,
  }).then(() => { 
    console.log('✅ Database connected!');
    emmiter.emit('db_connect');
  }).catch((err) => {
    console.error("Error during Data Source initialization", err)
});
});

export { emmiter }