import initMongoConnection from './db/initMongoConnection.js';
import setupServer from './server.js';


const boodstrap = async () => {
  await initMongoConnection();
  setupServer();
};

boodstrap();