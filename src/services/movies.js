import { MovieCollection } from '../db/models/Movie.js';

export const getMovies = async () => await MovieCollection.find();

export const getMovieById = async (id) => await MovieCollection.findById(id);

export const addMovie = async (payload) =>
  await MovieCollection.create(payload);

export const updateMovieById = async (id, payload, options = {}) =>
  await MovieCollection.findByIdAndUpdate(id, payload, options);

export const deleteMovieById = async (id) =>
  await MovieCollection.findByIdAndDelete(id);
