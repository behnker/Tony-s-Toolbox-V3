import { init } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

init({
  flowPath: 'src/flows',
  plugins: [
    googleAI(),
  ],
});
