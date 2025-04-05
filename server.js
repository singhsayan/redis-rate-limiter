import express from 'express';
import rateLimiter from './middleware/rateLimiter.js';

const app = express();
const port = 6000;

app.use(rateLimiter);

app.get('/', (req, res) => {
    res.send('You are within the rate Limit');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});