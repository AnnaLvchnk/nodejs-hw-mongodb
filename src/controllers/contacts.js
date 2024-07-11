import { contactsService } from '../services/contacts.js';
import createHttpError from 'http-errors';

const getAll = async (req, res) => {
  const contacts = await contactsService.getAll();
  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsService.getContactById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};

const addContact = async (req, res) => {
  const result = await contactsService.addContact(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data: result,
  });
};

const patchContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsService.updateContact(
    { _id: contactId },
    req.body,
  );

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: 'Successfully patched a contact!',
    data: contact,
  });
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsService.deleteContact({ _id: contactId });
  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }
  res.status(204).json({
    status: 204,
  });
};

export const contactsController = {
  getAll,
  getById,
  addContact,
  patchContact,
  deleteContact,
};