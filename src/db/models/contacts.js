import { Schema, model } from 'mongoose';
import {
  contactTypeList,
  stringLength,
} from '../../constants/contacts-constants.js';
import { mongooseSaveError, setUpdateSettings } from './hooks.js';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      match: stringLength,
    },
    phoneNumber: {
      type: String,
      required: true,
      match: stringLength,
    },
    email: {
      type: String,
      required: false,
      match: stringLength,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: contactTypeList,
      required: true,
      default: 'personal',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

contactsSchema.post('save', mongooseSaveError);

contactsSchema.pre('findOneAndUpdate', setUpdateSettings);

contactsSchema.post('findOneAndUpdate', mongooseSaveError);


export const ContactsCollection = model('contacts', contactsSchema);