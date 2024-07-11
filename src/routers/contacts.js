import { Router } from 'express';
import { contactsController } from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import isValidId from '../middlewares/isValidId.js';

const contactsRouter = new Router();

contactsRouter.get('/contacts', ctrlWrapper(contactsController.getAll));

contactsRouter.get('/contacts/:contactId',  isValidId,  ctrlWrapper(contactsController.getById));

contactsRouter.post('/contacts', ctrlWrapper(contactsController.addContact));

contactsRouter.patch('/contacts/:contactId', isValidId, ctrlWrapper(contactsController.patchContact));

contactsRouter.delete('/contacts/:contactId', isValidId, ctrlWrapper(contactsController.deleteContact));

export default contactsRouter;