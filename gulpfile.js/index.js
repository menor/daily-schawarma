/*
  Configuration is based on
  https://github.com/greypants/gulp-starter

  To add a new task, simply add a new task file that directory.
  tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.
*/

var requireDir = require("require-dir");

// Require all tasks in gulp tasks including subfolders.
requireDir("./tasks", { recurse: true });
