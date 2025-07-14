const parseNumber = (number) => {
  if (typeof number !== 'string') return;

  const value = parseFloat(number);
  if (Number.isNaN(value)) return;

  return value;
};

const parseString = (str) => {
  if (typeof str !== 'string') return;

  return str;
};

export const parseMovieFilters = ({
  rating,
  country,
  ageLimit,
  director,
  genres,
  title,
}) => {
  const parsedRating = parseNumber(rating);
  const parsedCountry = parseString(country);
  const parsedAgeLimit = parseString(ageLimit);
  const parsedDirector = parseString(director);
  const parsedGenres = parseString(genres);
  const parsedTitle = parseString(title);

  return {
    rating: parsedRating,
    country: parsedCountry,
    ageLimit: parsedAgeLimit,
    director: parsedDirector,
    genres: parsedGenres,
    title: parsedTitle,
  };
};
