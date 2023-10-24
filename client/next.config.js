/**
 * @type {import('next').NextConfig}
 */

const path = require('path');
const dotenv = require('dotenv');

// TODO: 
dotenv.config({ path: path.join(__dirname, '../.env.local') });
// const BASE_URL = `http://${process.env.SERVER_URL || 'localhost'}:${process.env.SERVER_PORT || 7777}`;
const BASE_URL = 'prod' === process.env.SERVER_TYPE ? `https://${process.env.SERVER_URL}` : `http://localhost:${process.env.SERVER_PORT || 7777}`;

/*
  NOTE: 
  apiURL = 'https://api.github.com/repos/paperdev/project-c/contents/shared/data/json/profile.json';
  rawURL = 'https://raw.githubusercontent.com/paperdev/project-c/master/shared/data/json/profile.json';
*/
const PROFILE_URL = 'https://raw.githubusercontent.com/paperdev/project-c/master/shared/data/json/profile.json';
const CHAT_URL = 'https://raw.githubusercontent.com/paperdev/project-c/master/shared/data/json/chat.json';

/* 
  NOTE: process.env.SERVER_TYPE
    github = github json
    dev = dev api
    prod = Nestjs server
*/

let chatUrl = `${BASE_URL}/chat`;
let profileUrl = `${BASE_URL}/profile`;
let historyUrl = `${BASE_URL}/profile/history`;

if ('github' === process.env.SERVER_TYPE) {
  chatUrl = CHAT_URL;
  profileUrl = PROFILE_URL;
  historyUrl = PROFILE_URL;
}

const nextConfig = {
  /* config options here */
  env: {
    SERVER_TYPE: process.env.SERVER_TYPE,
    CHAT_URL : chatUrl,
    PROFILE_URL : profileUrl,
    PROFILE_URL_HISTORY : historyUrl,
  },

  // output: 'export'
}
 
module.exports = nextConfig;