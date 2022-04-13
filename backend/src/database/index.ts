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
    emmiter.emit('db_connect')
   }).catch(() => {
     emmiter.emit('db_failed');
   }) ;
});

export { emmiter }