export const getEnvVar = (name) => {
  const value = process.env[name];

  if (value) return value;

  throw new Error(`Cannot find ${name}`);
};
