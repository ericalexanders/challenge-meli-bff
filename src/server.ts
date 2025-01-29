import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

import router from './routes';

dotenv.config();
const app: Express = express();
const port: number = parseInt(process.env.PORT || '3000', 10);

app.use(morgan('dev '));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send("ok");
});

app.use("/api", router)

app.listen(port, () => {
  console.log(`Server listening at URL_ADDRESS:${port}`);
});