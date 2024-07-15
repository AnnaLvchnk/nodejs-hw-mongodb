import { Router } from 'express';
import { contactsController } from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import isValidId from '../middlewares/isValidId.js';
import {contactsAddSchema, contactsUpdateSchema} from '../validation/contacts-schemas.js';


const contactsRouter = new Router();

contactsRouter.get('/contacts', ctrlWrapper(contactsController.getAll));

contactsRouter.get('/contacts/:contactId', isValidId, ctrlWrapper(contactsController.getById));

contactsRouter.post('/contacts', validateBody(contactsAddSchema), ctrlWrapper(contactsController.addContact));

contactsRouter.patch('/contacts/:contactId', validateBody(contactsUpdateSchema), isValidId, ctrlWrapper(contactsController.patchContact));

contactsRouter.delete('/contacts/:contactId', isValidId, ctrlWrapper(contactsController.deleteContact));

export default contactsRouter;