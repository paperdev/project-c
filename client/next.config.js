/**
 * @type {import('next').NextConfig}
 */

const path = require('path');
const dotenv = require('dotenv');

// TODO: 
dotenv.config({ path: path.join(__dirname, '../.env.local') });
const BASE_URL = `http://${process.env.SERVER_URL || 'localhost'}:${process.env.SERVER_PORT || 7777}`;

const nextConfig = {
  /* config options here */
  env: {
    CHAT_URL : `${BASE_URL}/chat`,
    PROFILE_URL : `${BASE_URL}/profile`,
    PROFILE_URL_HISTORY : `${BASE_URL}/profile/history`,
  },

  // output: 'export'
}
 
module.exports = nextConfig;