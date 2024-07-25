import path from 'node:path';

export const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const ACCESS_TOKEN_LIFETIME = 15 * 60 * 1000;

export const REFRESH_TOKEN_LIFETIME = 30 * 24 * 60 * 60 * 1000;

export const TEMP_UPLOAD_DIR = path.resolve('src', 'temp');

export const PUBLIC_DIR = path.resolve('src', 'public');

export const PUBLIC_PHOTOS_DIR = path.resolve('src', 'public', 'photos');