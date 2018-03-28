import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import cheerio from 'cheerio';
import template from './template';

import TestComponent from './TestComponent';
import StateComponent from './StateComponent';

const componentClass = {
  TestComponent,
  StateComponent,
};

const server = express();
server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  const html = template();
  const $ = cheerio.load(html, {xmlMode: false});

  const stateElement = $('#app-initial-state');
  const stateText = stateElement.html();
  const components = JSON.parse(stateText);

  for (let id in components) {
    const Component = componentClass[components[id].type];
    const element = React.createElement(Component, components[id].props);
    const componentString = renderToString(element);
    $('#'+id).html(componentString);
  }

  res.send($.html());
});

server.listen(8080);
console.log('listening 8080');
