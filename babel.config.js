// This file is used to configure the Babel transpiler for the project.
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["nativewind/babel"],
  };
};
