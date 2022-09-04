require('dotenv').config();
import app from './app';
import { client } from './database';

const PORT = process.env.PORT || 5000;

function startApiServer() {
  app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Listening: http://localhost:${PORT}`);
    /* eslint-enable no-console */
  });
}

client.connect()
  .then(startApiServer)
  .catch(error => {
    console.log(error);
    client.close();
  });