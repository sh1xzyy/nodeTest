import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  addMovieController,
  deleteMovieByIdController,
  getMovieByIdController,
  getMoviesController,
  patchMovieByIdController,
} from '../controllers/movies.js';
import { validateBody } from '../utils/validateBody.js';
import {
  addMovieSchema,
  updateMovieSchema,
} from '../validation/movieSchema.js';
import { isValidId } from '../middlewares/isValidId.js';

export const moviesRouter = Router();

moviesRouter.get('/', ctrlWrapper(getMoviesController));
moviesRouter.get('/:id', isValidId, ctrlWrapper(getMovieByIdController));
moviesRouter.post(
  '/',
  validateBody(addMovieSchema),
  ctrlWrapper(addMovieController),
);
moviesRouter.patch(
  '/:id',
  isValidId,
  validateBody(updateMovieSchema),
  ctrlWrapper(patchMovieByIdController),
);
moviesRouter.delete('/:id', isValidId, ctrlWrapper(deleteMovieByIdController));
