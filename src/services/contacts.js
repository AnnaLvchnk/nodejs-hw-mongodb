import { ContactsCollection } from '../db/models/contacts.js';

const getAll = async () => {
  return await ContactsCollection.find();
};

const getContactById = async (contactId) => {
  return await ContactsCollection.findById(contactId);
};

const addContact = async (data) => {
  return await ContactsCollection.create(data);
};

const updateContact = async (filter, data, options = {}) => {
  const result = await ContactsCollection.findOneAndUpdate(filter, data, {
    new: true,
    includeResultMetadata: true,
    ...options,
  });
  if (!result || !result.value) return null;

  return {
    data: result.value,
  };
};

const deleteContact = async (filter) => {
  return await ContactsCollection.findOneAndDelete(filter);
};

export const contactsService = {
  getAll,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
};