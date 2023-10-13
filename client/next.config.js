/**
 * @type {import('next').NextConfig}
 */

const path = require('path');
const dotenv = require('dotenv');

// TODO: 
dotenv.config({ path: path.join(__dirname, '../.env.local') });
const BASE_URL = `http://${process.env.SERVER_URL || 'localhost'}:${process.env.SERVER_PORT || 7777}`;
const withServer = 0 == process.env.WITH_SERVER ? false : true;

/*
  NOTE: 
  apiURL = 'https://api.github.com/repos/paperdev/project-c/contents/shared/data/json/profile.json';
  rawURL = 'https://raw.githubusercontent.com/paperdev/project-c/master/shared/data/json/profile.json';
*/
const PROFILE_URL = 'https://raw.githubusercontent.com/paperdev/project-c/master/shared/data/json/profile.json';
const CHAT_URL = 'https://raw.githubusercontent.com/paperdev/project-c/master/shared/data/json/chat.json';

const nextConfig = {
  /* config options here */
  env: {
    WITH_SERVER: withServer,
    CHAT_URL : withServer ? `${BASE_URL}/chat` : CHAT_URL,
    PROFILE_URL : withServer ? `${BASE_URL}/profile` : PROFILE_URL,
    PROFILE_URL_HISTORY : withServer ? `${BASE_URL}/profile/history` : PROFILE_URL,
  },

  // output: 'export'
}
 
module.exports = nextConfig;