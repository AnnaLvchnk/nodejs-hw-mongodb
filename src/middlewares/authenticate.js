import createHttpError from 'http-errors';
import { findSession } from '../services/session-services.js';
import { findUser } from '../services/auth-services.js';

const authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');
  // console.log(authHeader);

  if (!authHeader) {
    return next(createHttpError(401, 'Autorization header missing'));
  }

  const [bearer, accessToken] = authHeader.split(' ');
  if (bearer !== 'Bearer') {
    return next(createHttpError(401, 'Token must have bearer type'));
  }
  if (!accessToken) {
    return next(createHttpError(401, 'Token missing'));
  }

  const session = await findSession({ accessToken });
  if (!session) {
    return next(createHttpError(401, 'Session not found'));
  }

  const accessTokenExpired =  Date.now() > new Date(session.accessTokenValidUntil);
  if (accessTokenExpired) {
    return next(createHttpError(401, 'Access token expired'));
  }
const user = await findUser({_id: session.userId});
if (!user) {
  return next(createHttpError(401, 'User not found'));
}

req.user = user;
next();
};

export default authenticate;