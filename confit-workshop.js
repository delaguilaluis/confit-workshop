#!/usr/bin/env node

'use strict';

const workshopper = require('workshopper');
const path = require('path');

workshopper({
  name: 'confit-workshop',
  title: 'Confit Workshop',
  subtitle: 'Learn how to use Confit',
  appDir: __dirname,
  menuItems: [],
  exerciseDir: path.join(__dirname, './exercises/'),
});
