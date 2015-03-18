var publicDirectory = "./public";
var publicAssets = publicDirectory + "/assets";
var sourceDirectory = "./app";
var sourceAssets = sourceDirectory + "/assets";

module.exports = {
  publicDirectory: publicDirectory,
  sourceAssets: sourceAssets,
  publicAssets: publicAssets,

  browserSync: {
    server: {
      baseDir: publicDirectory
    },
    files: ['public/**/*.html']
  },

  html: {
    watch: sourceDirectory + '/views/**/*.html',
    src: [sourceDirectory + '/views/**/*.html', '!**/{layouts,shared}/**'],
    dest: publicDirectory,
  },

  sass: {
    src: sourceAssets + "/styles/**/*.{sass,scss}",
    dest: publicAssets + "/styles",
    settings: {}
  }
};
