/*
  NOTE: 
  apiURL = 'https://api.github.com/repos/paperdev/project-c/contents/src/app/data/profile.json';
  rawURL = 'https://raw.githubusercontent.com/paperdev/project-c/master/src/app/data/profile.json';
*/
const DATA_URL = 'https://raw.githubusercontent.com/paperdev/project-c/master/src/app/data';
const Request = async (fileName: string): Promise<string> => {
  try {
    const response = await fetch(DATA_URL + '/' + fileName);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export {
  Request
}