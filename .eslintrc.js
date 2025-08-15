module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['react', 'react-native', 'unused-imports'],
  ignorePatterns: ['node_modules/**', 'android/**', 'ios/**'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
  },
  env: {
    'react-native/react-native': true,
  },
};
