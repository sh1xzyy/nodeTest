import createHttpError from 'http-errors';
import {
  addMovie,
  deleteMovieById,
  getMovieById,
  getMovies,
  updateMovieById,
} from '../services/movies.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { movieSortFields } from '../db/models/Movie.js';
import { parseMovieFilters } from '../utils/filter/parseMovieFilters.js';

export const getMoviesController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query, movieSortFields);
  const filters = parseMovieFilters(req.query);
  const data = await getMovies({ page, perPage, sortBy, sortOrder, filters });

  res.status(200).json({
    status: 200,
    message: 'Successfully get movies',
    data,
  });
};

export const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await getMovieById({ id });

  if (!data) throw createHttpError(404, 'Movie not found');

  res.status(200).json({
    status: 200,
    message: 'Successfully get movies',
    data,
  });
};

export const addMovieController = async (req, res) => {
  const data = await addMovie(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a movie!',
    data,
  });
};

export const patchMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await updateMovieById({ _id: id }, { ...req.body });

  if (!data) throw createHttpError(404, 'Movie not found');

  res.status(201).json({
    status: 201,
    message: 'Successfully created a movie!',
    data,
  });
};

export const deleteMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await deleteMovieById({ id });

  if (!data) throw createHttpError(404, 'Movie not found');

  res.status(204).json({});
};
