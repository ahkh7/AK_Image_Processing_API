import express from 'express';
import routes from './routes/index';

const app = express();
const port = 7000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`server working at localhost : ${port}`);
});

export default app;
