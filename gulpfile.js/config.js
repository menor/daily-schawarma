var publicDirectory = "./public";
var publicAssets = publicDirectory + "/assets";
var sourceDirectory = "./app";
var sourceAssets = sourceDirectory + "/assets";

module.exports = {
  sass: {
    src: sourceAssets + '/styles/**/*.{sass, scss}',
    dest: publicAssets + "/styles"
  }
};
