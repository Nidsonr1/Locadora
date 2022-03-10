import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'db_locadora';
  createConnection({
    ...options,
  }).then(() => { console.log('✅ Database connected!') });
});