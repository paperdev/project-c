import OpenAI from 'openai';

const testAI = async (apiKey: string | undefined): Promise<any> => {
  try {
    if (!apiKey) {
      return Promise.resolve(null);
    }
    const openai = new OpenAI({
      apiKey: apiKey,
    });
  
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: 'Say this is a test' }],
      model: 'gpt-3.5-turbo',
    });
  
    // console.log(completion.choices);
    Promise.resolve(completion);
  } catch (error) {
    Promise.reject(error);
  }
}