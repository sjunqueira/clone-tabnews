const nextJest = require('next/jest');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const createJestConfig = nextJest({
  dir: '.',
});
const jestConfig = createJestConfig({
  moduleDirectories: ['node_modules', '<rootDir>'],
});

module.exports = jestConfig;