import Joi from 'joi';
import {
  AGE_LIMITS,
  COUNTRIES,
  GENRES,
  LANGUAGES,
} from '../constants/movies-constants.js';

export const addMovieSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  rating: Joi.number().required(),
  genres: Joi.array()
    .items(Joi.string().valid(...GENRES))
    .required(),
  duration: Joi.number().min(1).required(),
  releaseDate: Joi.date().iso().required(),
  director: Joi.string().required(),
  cast: Joi.array().items(Joi.string()).min(1).required(),
  language: Joi.string()
    .valid(...LANGUAGES)
    .required(),
  country: Joi.string()
    .valid(...COUNTRIES)
    .required(),
  ageLimit: Joi.string()
    .valid(...AGE_LIMITS)
    .required(),
  trailerUrl: Joi.string().uri().required(),
  poster: Joi.string().uri().optional(),
});

export const updateMovieSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  rating: Joi.number(),
  genres: Joi.array().items(Joi.string().valid(...GENRES)),
  duration: Joi.number().min(1),
  releaseDate: Joi.date().iso(),
  director: Joi.string(),
  cast: Joi.array().items(Joi.string()).min(1),
  language: Joi.string().valid(...LANGUAGES),
  country: Joi.string().valid(...COUNTRIES),
  ageLimit: Joi.string().valid(...AGE_LIMITS),
  trailerUrl: Joi.string().uri(),
  poster: Joi.string().uri().optional(),
});
