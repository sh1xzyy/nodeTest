import { MovieCollection } from '../db/models/Movie.js';
import { calcPaginationData } from '../utils/calcPaginationData.js';

export const getMovies = async ({
  page = 1,
  perPage = 10,
  sortBy,
  sortOrder,
  filters = {},
}) => {
  const skip = (page - 1) * perPage;
  const query = MovieCollection.find();

  console.log('title', filters.title);

  if (filters.title) {
    query.where('title').equals(filters.title);
  }
  console.log('rating', filters.rating);

  if (filters.rating) {
    query.where('rating').equals(filters.rating);
  }
  console.log('country', filters.country);

  if (filters.country) {
    query.where('country').equals(filters.country);
  }
  console.log('ageLimit', filters.ageLimit);

  if (filters.ageLimit) {
    query.where('ageLimit').equals(filters.ageLimit);
  }
  console.log('Ratdirectoring', filters.director);

  if (filters.director) {
    query.where('director').equals(filters.director);
  }
  console.log('genres', filters.genres);

  if (filters.genres) {
    query.where('genres').equals(filters.genres);
  }

  const total = await MovieCollection.find().merge(query).countDocuments();

  const items = await query
    .skip(skip)
    .limit(perPage)
    .sort({ [sortBy]: sortOrder });

  const paginationData = calcPaginationData({ page, perPage, total });

  return {
    items,
    total,
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
