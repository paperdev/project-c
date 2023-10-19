/**
 * @type {import('next').NextConfig}
 */

const path = require('path');
const dotenv = require('dotenv');

// TODO: 
dotenv.config({ path: path.join(__dirname, '../.env.local') });
const BASE_URL = `http://${process.env.SERVER_URL || 'localhost'}:${process.env.SERVER_PORT || 7777}`;

/*
  NOTE: 
  apiURL = 'https://api.github.com/repos/paperdev/project-c/contents/shared/data/json/profile.json';
  rawURL = 'https://raw.githubusercontent.com/paperdev/project-c/master/shared/data/json/profile.json';
*/
const PROFILE_URL = 'https://raw.githubusercontent.com/paperdev/project-c/master/shared/data/json/profile.json';
const CHAT_URL = 'https://raw.githubusercontent.com/paperdev/project-c/master/shared/data/json/chat.json';

/* 
  NOTE: process.env.SERVER_TYPE
    dev = github 
    local = localhost api
    prod = Nestjs server
*/

let chatUrl = CHAT_URL;
let profileUrl = PROFILE_URL;
let historyUrl = PROFILE_URL;

if ('prod' === process.env.SERVER_TYPE) {
  chatUrl = `${BASE_URL}/chat`;
  profileUrl = `${BASE_URL}/profile`;
  historyUrl = `${BASE_URL}/profile/history`;
}
else if ('local' === process.env.SERVER_TYPE) {
  // TODO:
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