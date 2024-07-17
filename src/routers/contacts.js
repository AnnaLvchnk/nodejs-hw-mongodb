import { Router } from 'express';
import { contactsController } from '../controllers/contacts.js';

import ctrlWrapper from '../utils/ctrlWrapper.js';
import validateBody from '../utils/validateBody.js';
import authenticate from '../middlewares/authenticate.js';

import isValidId from '../middlewares/isValidId.js';
import {contactsAddSchema, contactsUpdateSchema} from '../validation/contacts-schemas.js';


const contactsRouter = new Router();

contactsRouter.use(authenticate);

contactsRouter.get('/', ctrlWrapper(contactsController.getAll));

contactsRouter.get('/:contactId', isValidId, ctrlWrapper(contactsController.getById));

contactsRouter.post('/', validateBody(contactsAddSchema), ctrlWrapper(contactsController.addContact));

contactsRouter.patch('/:contactId', validateBody(contactsUpdateSchema), isValidId, ctrlWrapper(contactsController.patchContact));

contactsRouter.delete('/:contactId', isValidId, ctrlWrapper(contactsController.deleteContact));

export default contactsRouter;