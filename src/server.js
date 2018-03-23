import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import cheerio from 'cheerio';

import TestComponent from './TestComponent';
import template from './template';
import {hydrate} from 'react-dom';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
  
  const html = template();
  const $ = cheerio.load(html);
  
  const stateElement = $('#APP_INITIAL_STATE');
  const stateText = stateElement.text();
  const components = JSON.parse(stateText);

  for (let id in components) {
    const componentString = renderToString(<TestComponent {...components[id].props} />);
    $('#'+id).html(componentString);
  }

  stateElement.replaceWith($('<script>window.__APP_INITIAL_STATE__ = '+stateText+'</script>'));

  res.send($.html());
  
});

server.listen(8080);
console.log('listening 8080');