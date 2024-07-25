import nodemailer from 'nodemailer';
import env from './env.js';
import Joi from 'joi';
import createHttpError from 'http-errors';
const { options } = Joi;

const transporter = nodemailer.createTransport({
  host: env('SMTP_HOST'),
  port: Number(env('SMTP_PORT')),
  auth: {
    user: env('SMTP_USER'),
    pass: env('SMTP_PASSWORD'),
  },
});

export const sendEmail = async (options) => {
  try {
    await transporter.sendMail(options);
  } catch (error) {
    throw createHttpError(500, 'Failed to send the email, please try again later.');
  }
};