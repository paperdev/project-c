import fs from 'fs';
import path from 'path';

const PATH_JSON = path.join(process.cwd(), 'src/app/data');

// TODO: request
const Request = async (fileName: string): Promise<string> => {
  try {
    const filePath = path.join(PATH_JSON, fileName);
    const jsonData = await fs.readFileSync(filePath);

    return JSON.parse(jsonData.toString());
  } catch (error) {
    throw error;
  }
}

export {
  Request
}