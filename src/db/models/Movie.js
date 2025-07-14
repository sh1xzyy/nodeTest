import { model, Schema } from 'mongoose';
import {
  AGE_LIMITS,
  COUNTRIES,
  GENRES,
  LANGUAGES,
} from '../../constants/constants.js';
import { setUpdateSettings } from './hooks.js';

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    genres: {
      type: [String],
      enum: GENRES,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    cast: {
      type: [String],
      required: true,
    },
    language: {
      type: String,
      enum: LANGUAGES,
      required: true,
    },
    country: {
      type: String,
      enum: COUNTRIES,
      required: true,
    },
    ageLimit: {
      type: String,
      enum: AGE_LIMITS,
      required: true,
    },
    trailerUrl: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true },
);

movieSchema.pre('findByIdAndUpdate', setUpdateSettings);

export const MovieCollection = model('movie', movieSchema);
