import React from 'react';
import { hydrate } from 'react-dom';

import TestComponent from './TestComponent';
import StateComponent from './StateComponent';

const componentClass = {
  TestComponent,
  StateComponent,
};

const components = window.__APP_INITIAL_STATE__;

for (let id in components) {
  const Component = componentClass[components[id].type];
  const element = React.createElement(Component, components[id].props);
  hydrate(element, document.getElementById(id));
}

