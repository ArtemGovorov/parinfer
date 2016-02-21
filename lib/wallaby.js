module.exports = function () {

  return {
    files: [
      'parinfer.js',
      'test/**/*.*',
      '!test/cases.js'
    ],

    tests: [
      'test/cases.js'
    ],

    env: {
      type: 'node'
    }
  };
};
