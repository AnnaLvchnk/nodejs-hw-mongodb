import { TEMP_UPLOAD_DIR, PUBLIC_DIR, PUBLIC_PHOTOS_DIR} from './constants/user-constants.js';
import initMongoConnection from './db/initMongoConnection.js';
import setupServer from './server.js';
import createDirIfNotExists from './utils/createDirIfNotExists.js';

const boodstrap = async () => {
  await initMongoConnection();
  await createDirIfNotExists(TEMP_UPLOAD_DIR);
  await createDirIfNotExists(PUBLIC_DIR);
  await createDirIfNotExists(PUBLIC_PHOTOS_DIR);
  setupServer();
};

boodstrap();