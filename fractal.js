'use strict';

const fractal = module.exports = require('@frctl/fractal').create();

fractal.set('project.title', 'Fractal test');
fractal.components.set('path', `${__dirname}/src/components`);
fractal.docs.set('path', `${__dirname}/src/docs`);
