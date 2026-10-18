import express from 'express';
import { add } from './math.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const result = add(5, 5);
  res.json({
    message: 'Hello from GitHub Actions CI/CD!',
    mathTest: `5 + 5 = ${result}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});