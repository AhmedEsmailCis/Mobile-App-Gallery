module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!(jest-)?react-native|@react-native-community|)',
  ],
  collectCoverageFrom: ['app /**/*.{ts,js,tsx}'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
};
