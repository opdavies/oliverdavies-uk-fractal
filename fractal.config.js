'use strict';

const fractal = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');
const path = require('path');

fractal.set('project.title', 'oliverdavies-uk');

const twig = require('@frctl/twig')({
  functions: {
    modify(baseClass, modifiers = []) {
      // Ensure we have an array of modifiers.
      const modifiersArray = Array.isArray(modifiers) ? modifiers : [modifiers];

      // Loop over them and prepend the baseclass.
      const classArray = modifiersArray.map(modifier => `${baseClass}--${modifier}`);
      classArray.unshift(baseClass);
      return classArray.join(' ');
    },
  },
});

fractal.components.engine(twig);
fractal.components.set('default.preview', '@preview');
fractal.components.set('ext', '.twig');

fractal.components.set('path', path.join(__dirname, 'components'));

fractal.docs.set('path', path.join(__dirname, 'docs'));

fractal.web.set('static.path', path.join(__dirname, 'public'));

fractal.web.theme(
  mandelbrot({
    format: 'yaml',
    lang: 'en-GB',
    nav: [
      'search',
      'docs',
      'components',
      'information',
    ],
    skin: {
      name: 'default',
      accent: '#114b71',
      complement: '#fff',
      links: '#114b71',
    }
  })
);

fractal.components.set('default.context', {
  avatarUrl: 'https://avatars.githubusercontent.com/u/339813?s=460&u=21019981a38c5298cde632294df2e4f12d3bee6b&v=4',
  menuLinks: [
    'About',
    'Press Info',
    'Service',
    'Talks',
    'Podcast',
    'Daily List',
  ],
});
