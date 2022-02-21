module.exports = {
  testEnvironment: 'jsdom',
  rootDir: '../',
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1'
  },
  setupFilesAfterEnv: ['./test/setupTests.js'],
};
