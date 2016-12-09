'use strict';

const path = require('path');
const filecheck = require('workshopper-exercise/filecheck');
const execute = require('workshopper-exercise/execute');
const comparestdout = require('workshopper-exercise/comparestdout');
const confit = require('confit');
let exercise = require('workshopper-exercise')();

exercise.longCompareOutput = true;

exercise = filecheck(exercise);
exercise = execute(exercise);
exercise = comparestdout(exercise);

exercise.addProcessor(function (mode, callback) {
  const testFile = this.args[0];
  const baseDir = path.resolve(process.cwd(), testFile, '..');
  const configFilePath = path.resolve(baseDir, 'config.json');

  try {
    require(configFilePath); // eslint-disable-line
  } catch (e) {
    const err = new Error('The configuration file was not found');
    return process.nextTick(() => callback(err, false));
  }

  return confit(baseDir).create((err, config) => {
    if (err) return process.nextTick(() => callback(err, false));

    if (!config.get('name')) {
      const nonameErr = new Error('The name configuration was not found');
      return process.nextTick(() => callback(nonameErr, false));
    }

    return process.nextTick(() => callback(undefined, true));
  });
});

module.exports = exercise;
