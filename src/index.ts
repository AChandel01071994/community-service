import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import { dbConnect } from './db';
import { v1Router } from './resources/v1';

dotenv.config();
void dbConnect();

const app = express();
const port = process.env.PORT ?? 8800;

const swaggerDocument = JSON.parse(fs.readFileSync('swagger.json', 'utf-8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use('/api/v1', v1Router);

app.use((_err: Error, _req: Request, res: Response, _next: NextFunction) => {
  // log errors
  res.status(500).send(_err.message);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
