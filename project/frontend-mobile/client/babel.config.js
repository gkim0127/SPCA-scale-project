module.exports = function(api) {
  api.cache(true);
  return {
      presets: ['babel-preset-expo'],
      plugins: ['@babel/plugin-proposal-export-namespace-from', 'nativewind/babel', 'react-native-reanimated/plugin', require.resolve('expo-router/babel')],
  }
};
