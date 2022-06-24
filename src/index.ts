import * as dotenv from 'dotenv';

(async () => {
  if (process.env.NODE_ENV === 'development') dotenv.config();
  console.log('Hello World!');
  console.log('Please Write Your Code Here...');
})();
