import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8800;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.use((_err: Error, _req: Request, res: Response, _next: NextFunction) => {
  // log errors
  res.status(500).send('Something broke!');
});
