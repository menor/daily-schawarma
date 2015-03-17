var publicDirectory = "./public";
var publicAssets = publicDirectory + "/assets";
var sourceDirectory = "./app";
var sourceAssets = sourceDirectory + "/assets";

module.exports = {
  publicDirectory: publicDirectory,
  sourceAssets: sourceAssets,
  publicAssets: publicAssets,

  sass: {
    src: sourceAssets + "/styles/**/*.{sass,scss}",
    dest: publicAssets + "/styles",
    settings: {}
  }
};
