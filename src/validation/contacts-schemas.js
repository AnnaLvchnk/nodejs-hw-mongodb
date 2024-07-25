import Joi from 'joi';
import { contactTypeList} from '../constants/contacts-constants.js';

export const contactsAddSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...contactTypeList),
  photo:Joi.string(),
}).messages({
  'string.base': 'Field {#label} must be a string.',
  'string.empty': 'Field {#label} cannot be empty.',
  'string.email': 'Field {#label} must be a valid email address.',
  'string.pattern.base': 'Field {#label} must be in the format 000-000-00-00',
  'any.required': 'missing required {#label} field',
});

export const contactsUpdateSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid(...contactTypeList),
  photo:Joi.string(),
}).messages({
  'string.base': 'Field {#label} must be a string.',
  'string.empty': 'Field {#label} cannot be empty.',
  'string.email': 'Field {#label} must be a valid email address.',
  'string.pattern.base': 'Field {#label} must be in the format 000-000-00-00',
  'any.required': 'missing required {#label} field',
});