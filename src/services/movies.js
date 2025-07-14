import { MovieCollection } from '../db/models/Movie.js';
import { calcPaginationData } from '../utils/calcPaginationData.js';

export const getMovies = async ({
  page = 1,
  perPage = 10,
  sortBy,
  sortOrder,
}) => {
  const skip = (page - 1) * perPage;
  const items = await MovieCollection.find()
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });
  const totalItems = await MovieCollection.countDocuments();

  const paginationData = calcPaginationData({ page, perPage, totalItems });

  return {
    items,
    totalItems,
    ...paginationData,
  };
};

export const getMovieById = async (id) => await MovieCollection.findById(id);

export const addMovie = async (payload) =>
  await MovieCollection.create(payload);

export const updateMovieById = async (id, payload, options = {}) =>
  await MovieCollection.findByIdAndUpdate(id, payload, options);

export const deleteMovieById = async (id) =>
  await MovieCollection.findByIdAndDelete(id);
