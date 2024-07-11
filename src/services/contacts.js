import { ContactsCollection } from '../db/models/contacts.js';

const getAll = async () => {
  return await ContactsCollection.find();
};

const getContactById = async (contactId) => {
  return await ContactsCollection.findById(contactId);
};

export const contactsService = { getAll, getContactById };