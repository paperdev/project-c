/**
 * @type {import('next').NextConfig}
 */

const path = require('path');
const dotenv = require('dotenv');

// TODO: 
dotenv.config({ path: path.join(__dirname, '../.env.local') });

const nextConfig = {
  /* config options here */
  env: {
    CHAT_URL : `http://${process.env.SERVER_URL || 'localhost'}:${process.env.SERVER_PORT || 7777}/chat`,
  }
}
 
module.exports = nextConfig;