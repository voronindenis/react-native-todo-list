module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['.'],
        extensions: ['.js', '.ios.js', '.android.js'],
        alias: {
          'todo-list': './',
          '@': './src',
        },
      },
    ],
  ],
};
