import { ContactsCollection } from '../db/models/contacts.js';
import { SORT_ORDER } from '../constants/contacts-constants.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

const getAll = async ({filter, page, perPage, sortBy = '_id', sortOrder = 'asc'}) => {

  const skip = (page - 1) * perPage;
    const contactsQuery = ContactsCollection.find();

    if (filter.contactType) {
      contactsQuery.where('contactType').eq(filter.contactType);
    }
    if (filter.isFavourite) {
      contactsQuery.where('isFavourite').eq(filter.isFavourite);
    }

  const contactCount = await ContactsCollection.find().merge(contactsQuery).countDocuments();

  const contacts = await contactsQuery.skip(skip).limit(perPage).sort({[sortBy] : sortOrder});

  const paginationData = calculatePaginationData(contactCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

const getContactById = async (contactId) => {
  return await ContactsCollection.findById(contactId);
};

const addContact = async (data) => {
  return await ContactsCollection.create(data);
};

const updateContact = async (filter, data, options = {}) => {
  const result = await ContactsCollection.findOneAndUpdate(filter, data, {
    // new: true,
    // runValidators: true,
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