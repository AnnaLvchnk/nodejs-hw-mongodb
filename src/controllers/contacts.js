import { contactsService } from '../services/contacts.js';

const getAll = async (req, res, next) => {
  try {
    const contacts = await contactsService.getAll();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res) => {
  try {
    const { contactId } = req.params;
    const contact = await contactsService.getContactById(contactId);
    if (!contact) {
      res.status(404).json({
        message: 'Contact not found',
      });
      return;
    }
    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      error.status = 404;
    }
    const { status = 500 } = error;

    res.status(status).json({
      message: error.message,
    });
  }
};

export const contactsController = { getAll, getById };