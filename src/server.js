import express from 'express';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { moviesRouter } from './routers/movies-ROUTER.js';

export const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use('/movies', moviesRouter);

  app.use(errorHandler);
  app.get(notFoundHandler);

  const PORT = getEnvVar('PORT');

  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
};
