import { Router } from 'express';
import { contactsController} from '../controllers/contacts.js';

const contactsRouter = new Router();

contactsRouter.get('/contacts', contactsController.getAll);
contactsRouter.get('/contacts/:contactId', contactsController.getById);

export default contactsRouter;